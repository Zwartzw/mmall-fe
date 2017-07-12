/*
* @Author: 0284
* @Date:   2017-06-14 11:46:02
* @Last Modified by:   0284
* @Last Modified time: 2017-06-14 11:50:09
*/

'use strict';
var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount:function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    addToCart:function (productInfo,resolve,reject) {
        _mm.request({
            url:_mm.getServerUrl('/cart/add.do'),
            data:productInfo,
            success:resolve,
            error:reject
        })
    }
};
module.exports = _cart;