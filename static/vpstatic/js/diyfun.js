/*
* 全局自定义事件方法
* author jiangsw
* date 2018-08-02
*/ 
// 获取样式currentStyle getComputedStyle兼容处理
function getStyle(obj, attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}