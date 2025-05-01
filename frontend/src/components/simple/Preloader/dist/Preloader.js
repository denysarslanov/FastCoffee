"use strict";
exports.__esModule = true;
exports.PreloaderBlock = void 0;
var React = require("react");
var Preloader_module_css_1 = require("./Preloader.module.css");
var preloader_gif_1 = require("../../../assets/images/preloader.gif");
var Preloader = function () {
    return React.createElement("div", { className: Preloader_module_css_1["default"].preloader },
        React.createElement("img", { src: preloader_gif_1["default"], alt: "Loading..." }));
};
exports.PreloaderBlock = function () {
    return React.createElement("div", { className: Preloader_module_css_1["default"].wrapper },
        React.createElement("div", { className: Preloader_module_css_1["default"].preloader },
            React.createElement("img", { src: preloader_gif_1["default"], alt: "Loading..." })));
};
exports["default"] = Preloader;
