'use strict';
var fs = require('fs');

//遍历读取文件
+function readFile() {
    var path = "./static";
    var files = fs.readdirSync(path); 
    var _weblist = [], _css = '', _js = '';
    files.map(function(item, index) {
        if(item.indexOf("web") !== -1) {
            _weblist.push(item);
        }
    });
    _weblist.forEach(walk);
    function walk(file) {
        var filelist = fs.readdirSync(path + '/' + file);
        filelist.map(function(item, index) {
            if (/^home\.[\s\S]*\.js$/.test(item) || /^commons\.[\s\S]*\.js$/.test(item)) {
                _js += '<script src="' + '../' + file + '/' + item + '" type="text/javascript"></script>';
            }
            if (/^home\.css$/.test(item) || /^commons\.css$/.test(item)) {
                _css += '<link href="' + '../' + file + '/' + item + '" rel="stylesheet" />';
            }
        })
    };
    var _html = '<!DOCTYPE html>\
        <html>\
            <head>\
                <meta charset="utf-8">\
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\
                <title>维普-VALM</title>\
                <link href="../vpstatic/favicon.ico" rel="icon" type="image/x-icon" />' 
                + _css +
                '<script src="../vpstatic/plugins/jquery-1.11.1.min.js"></script>\
                <script src="../vpstatic/js/diyfun.js"></script>\
                <script src="../vpcommon/config.js"></script>\
                <!--[if lte IE 9]>\
                    <link rel="stylesheet" href="../vpstatic/style/ie8.css">\
                    <script src="../vpstatic/plugins/html5shiv.min.js"></script>\
                    <script src="../vpstatic/plugins/respond.js"></script>\
                    <script src="../vpstatic/js/ie8.js"></script>\
                <![endif]-->\
                <script src="../dll.vendor.js"></script>\
            </head>\
            <body class="bg-gray">\
                <div id="app"></div>'
                + _js +
            '</body>\
        </html>';
    fs.writeFile('./src/index.html', _html, 'utf-8', function complete() {
        console.log("inserthtml.js执行成功");
    });
}();

