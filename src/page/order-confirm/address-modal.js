/**
 * Created by weimin on 2017/7/13 0013.
 */

'use strict';
var _mm                     = require('util/mm.js');
var _cities                 = require('util/cities/index.js');
var _address                = require('service/address-service.js');
var templateAddressModal    = require('./address-modal.string');

var addressModal = {
    show: function (option) {
        // option 绑定
        this.option         = option;
        this.$modalWrap     = $('.modal-wrap');
        //渲染页面
        this.loadModal();
       //绑定事件
        this.bindEvent();
    },
    bindEvent : function () {
        var _this = this;
        //城市和省份的二级联动
        this.$modalWrap.find('#receiver-province').change(function () {
            var selectedProvince = $(this).val();
            _this.loadCities(selectedProvince);
        });
    },
    loadModal : function () {
        var addressModalHtml = _mm.renderHtml(templateAddressModal,this.option.data);
        this.$modalWrap.html(addressModalHtml);
        
        this.loadProvince();
        this.loadCities();
    },
    //加载省份信息
    loadProvince:function () {
        var provinces       = _cities.getProvinces() || [],
            $provinceSelect = this.$modalWrap.find('#receiver-province');
        $provinceSelect.html(this.getSelectOption(provinces));
    },
    //加载城市信息
    loadCities:function (provinceName) {
        var cities      = _cities.getCities(provinceName) || [],
            $citySelect = this.$modalWrap.find('#receiver-city');
        $citySelect.html(this.getSelectOption(cities));
        // 如果是更新地址，并且有城市信息，做城市的回填
        if(this.option.isUpdate && this.option.data.receiverCity){
            $citySelect.val(this.option.data.receiverCity);
        }
    },
    //获取select框的选项，输入是一个数组：array，输出html
    getSelectOption : function (optionArray) {
        var html = '<option value="">请选择</option>';
        for(var i = 0,length = optionArray.length; i < length; i++){
            html += '<option value="'+ optionArray[i] +'">'+ optionArray[i] +'</option>';
        }
        return html;
    },


    hide: function () {

    }
};
module.exports = addressModal;