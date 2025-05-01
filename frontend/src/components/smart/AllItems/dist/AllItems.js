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
var React = require("react");
var AllItems_module_css_1 = require("./AllItems.module.css");
var ProductCard_1 = require("../ProductCard/ProductCard");
var AllItems = function (_a) {
    var items = _a.items;
    return React.createElement(React.Fragment, null,
        React.createElement("section", { className: AllItems_module_css_1["default"].allItemsWrapper }, items.map(function (i, index) { return React.createElement(ProductCard_1["default"], __assign({}, i)); })));
};
exports["default"] = AllItems;
