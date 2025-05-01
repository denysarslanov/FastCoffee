"use strict";
exports.__esModule = true;
var React = require("react");
var List_module_css_1 = require("./List.module.css");
var List = function (_a) {
    var list = _a.list;
    return React.createElement("ul", { className: "list" }, list.map(function (i) {
        return React.createElement("li", { className: 'list__item' },
            React.createElement("h4", { className: List_module_css_1["default"].list__title }, i.title),
            React.createElement("span", { className: List_module_css_1["default"].list__text }, i.text));
    }));
};
exports["default"] = List;
