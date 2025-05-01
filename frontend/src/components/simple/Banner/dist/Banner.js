"use strict";
exports.__esModule = true;
var React = require("react");
var Banner_module_css_1 = require("./Banner.module.css");
var BlockTitle_1 = require("../Navbar/BlockTitle/BlockTitle");
var Banner = function (_a) {
    var imgUrl = _a.imgUrl, title = _a.title, text = _a.text;
    React.createElement("h3", { className: Banner_module_css_1["default"].banner__title }, title);
    return React.createElement(React.Fragment, null,
        React.createElement("section", { className: Banner_module_css_1["default"].banner },
            React.createElement(BlockTitle_1["default"], { title: "\u0427\u043E\u043C\u0443 \u043E\u0431\u0438\u0440\u0430\u044E\u0442\u044C Fast Coffee?" }),
            React.createElement("div", { className: Banner_module_css_1["default"].banner__contentWrapper },
                React.createElement("div", { className: Banner_module_css_1["default"].banner__imgWrapper },
                    React.createElement("img", { className: Banner_module_css_1["default"].banner__img, src: imgUrl, alt: "Image didnt load" }),
                    React.createElement("div", { className: Banner_module_css_1["default"].banner__mask })),
                React.createElement("div", { className: Banner_module_css_1["default"].banner__content },
                    React.createElement("p", { className: Banner_module_css_1["default"].banner__text }, text)))));
};
exports["default"] = Banner;
