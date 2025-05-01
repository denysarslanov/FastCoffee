"use strict";
exports.__esModule = true;
var React = require("react");
var BlockTitle_1 = require("../../simple/Navbar/BlockTitle/BlockTitle");
var ProductsBlock_module_css_1 = require("./ProductsBlock.module.css");
var ProductsBlock = function (props) {
    return React.createElement("div", { className: ProductsBlock_module_css_1["default"].products },
        React.createElement("div", { className: ProductsBlock_module_css_1["default"].titleContainer },
            React.createElement(BlockTitle_1["default"], { title: "\u041D\u0430\u0448\u0430 \u043A\u0430\u0432\u0430", text: "\u0421\u043F\u0438\u0441\u043E\u043A \u043D\u0430\u0448\u043E\u0457 \u043A\u0430\u0432\u0438" })));
};
exports["default"] = ProductsBlock;
