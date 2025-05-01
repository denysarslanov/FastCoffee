"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Flavor = void 0;
var React = require("react");
var Flavors_module_css_1 = require("./Flavors.module.css");
exports.Flavor = function (_a) {
    var text = _a.text;
    return React.createElement("li", { className: Flavors_module_css_1["default"].flavor },
        React.createElement("button", { className: Flavors_module_css_1["default"].flavor__button }, text));
};
var Flavors = function (_a) {
    var flavors = _a.flavors;
    return React.createElement("div", { className: Flavors_module_css_1["default"].flavors },
        React.createElement("h3", { className: Flavors_module_css_1["default"].flavors__title }, "\u0414\u043E\u0434\u0430\u0442\u043A\u0438"),
        React.createElement("ul", { className: Flavors_module_css_1["default"].flavors__list }, flavors.map(function (i, index) { return React.createElement(exports.Flavor, __assign({}, i, { key: index })); })));
};
exports["default"] = Flavors;
