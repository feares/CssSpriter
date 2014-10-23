var fs = require('fs');
var css = require('css');
var _ = require('underscore');
var path = require('path');


var cssCreator = function (ast, imgInfos, filePath, imgFilePath) {

    _.each(imgInfos, function (imgInfo) {

        // 将各种background属性塞进去
        imgInfo.rule.declarations.push(
            {
                "type": "declaration",
                "property": "background-image",
                "value": 'url("' + imgFilePath + '")'
            },
            {
                "type": "declaration",
                "property": "background-position",
                "value": '-' + imgInfo.x + 'px ' + '-' + imgInfo.y + 'px'
            }
        );
    });

    fs.writeFileSync(path.dirname(filePath) + '/index-release.css', css.stringify(ast));
};


module.exports = exports = cssCreator;