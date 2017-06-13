/*
* @Author: WillGiab
* @Date:   2017-06-14 00:40:04
* @Last Modified by:   WillGiab
* @Last Modified time: 2017-06-14 00:49:01
*/

'use strict';
var _mm =require('util/mm.js');

var _user = {
    logout:function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    }
}