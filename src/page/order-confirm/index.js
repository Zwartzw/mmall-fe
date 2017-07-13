/**
 * Created by weimin on 2017/7/13 0013.
 */

'use strict';

require('./index.css');
require('page/common/header/index.js');
var _mm             = require('util/mm.js');
var _order          = require('service/order-service.js');
var templateIndex   = require('./index.string');

var page = {
    data: {},
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadCart();
    },
    bindEvent: function () {
        var _this = this;
    }
};
$(function () {
    page.init();
});