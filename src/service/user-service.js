/*
* @Author: WillGiab
* @Date:   2017-06-14 00:40:04
* @Last Modified by:   WillGiab
* @Last Modified time: 2017-06-14 11:43:26
*/

'use strict';
var _mm = require('util/mm.js');

var _user = {
    // 检查登陆状态
    checkLogin:function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout:function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
};
module.exports = _user;