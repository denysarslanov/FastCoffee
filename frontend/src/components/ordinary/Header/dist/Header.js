"use strict";
exports.__esModule = true;
var React = require("react");
var Header_module_css_1 = require("./Header.module.css");
var NavbarWrapper_1 = require("../NavbarWrapper/NavbarWrapper");
var HeaderContent_1 = require("../HeaderContent/HeaderContent");
var Header = function () {
    // TODO
    // REPLACE <a> BY THE NAVLINK
    return React.createElement("header", { className: Header_module_css_1["default"].header },
        React.createElement(NavbarWrapper_1["default"], { black: false, isFixed: true }),
        React.createElement("div", { className: Header_module_css_1["default"].header__contentWrapper },
            React.createElement(HeaderContent_1["default"], null)));
};
exports["default"] = Header;
