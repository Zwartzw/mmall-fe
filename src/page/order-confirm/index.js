/**
 * Created by weimin on 2017/7/13 0013.
 */

'use strict';

require('./index.css');
require('page/common/header/index.js');
var _mm                 = require('util/mm.js');
var _order              = require('service/order-service.js');
var _address            = require('service/address-service.js');
var templateAddress     = require('./address-list.string');
var templateProduct     = require('./product-list.string');
var addressModal        = require('./address-modal');

var page = {
    data: {
        selectedAddress : null
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent: function () {
        var _this = this;
        // 地址的选择
        $(document).on('click', '.address-item', function(){
            $(this).addClass('active')
                .siblings('.address-item').removeClass('active');
            _this.data.selectedAddressId = $(this).data('id');
        });
        // 订单提交
        $(document).on('click', '.order-submit', function(){
            var shippingId = _this.data.selectedAddressId;
            if(shippingId){
                _order.createOrder({
                    shippingId : shippingId
                },function (res) {
                    window.location.href = './payment.html?orderNumber=' + res.orderNo;
                },function (errMsg) {
                    _mm.errorTips(errMsg)
                })
            }else{
                _mm.errorTips('请选择地址后提交');
            }
        });
        // 添加地址
        $(document).on('click', '.address-add', function(){
           addressModal.show({
               isUpdate : false,
               onSuccess: function () {
                   _this.loadAddressList();
               }
           })
        });
    },
    // 加载地址列表信息
    loadAddressList: function () {
        var _this = this;
        //获取地址列表
        _address.getAddressList(function (res) {
                var addressListHtml = _mm.renderHtml(templateAddress, res);
                $('.address-con').html(addressListHtml);
            },function (errMsg) {
                $('.address-con').html('<p class="err-tip">地址加载失败，请刷新</p>');
            });
    },
    // 加载地址列表信息
    loadProductList: function () {
        var _this = this;
        //获取地址列表
        _order.getProductList(function (res) {
            var productListHtml = _mm.renderHtml(templateProduct, res);
            $('.product-con').html(productListHtml);
        },function (errMsg) {
            $('.product-con').html('<p class="err-tip">商品清单加载失败，请刷新</p>');
        });
    },
};
$(function () {
    page.init();
});