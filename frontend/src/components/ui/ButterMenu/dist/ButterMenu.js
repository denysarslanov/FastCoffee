"use strict";
exports.__esModule = true;
var React = require("react");
var ButterMenu_module_css_1 = require("./ButterMenu.module.css");
// THIS BUTTER ICON WILL APPEAR IN EVERY CORNER OF APP WHEN DEVICE-WIDTH WILL BE SMALL ENOUGH (900 px)
var ButterMenu = function (props) {
    var isOpened = props.isOpened;
    return React.createElement("ul", { className: !isOpened ? ButterMenu_module_css_1["default"].butter : ButterMenu_module_css_1["default"].butterOpened },
        React.createElement("li", { className: ButterMenu_module_css_1["default"].line + " " + (props.theme === 'white' ? ButterMenu_module_css_1["default"].white : ButterMenu_module_css_1["default"].dark) }),
        React.createElement("li", { className: ButterMenu_module_css_1["default"].line + " " + (props.theme === 'white' ? ButterMenu_module_css_1["default"].white : ButterMenu_module_css_1["default"].dark) }),
        React.createElement("li", { className: ButterMenu_module_css_1["default"].line + " " + (props.theme === 'white' ? ButterMenu_module_css_1["default"].white : ButterMenu_module_css_1["default"].dark) }));
};
exports["default"] = ButterMenu;
