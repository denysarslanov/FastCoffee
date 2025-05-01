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
var react_router_1 = require("react-router");
var selectors_1 = require("../core/selectors");
var coffeeCardPage_1 = require("../pages/coffeeCardPage");
var ProductsRouting = function (_a) {
    var items = _a.items;
    return React.createElement(React.Fragment, null, items.map(function (coffee, index) {
        if (!coffee)
            return React.createElement(React.Fragment, null);
        return React.createElement(react_router_1.Route, { path: selectors_1.getNavLinks().item + "/" + coffee.url + "/", element: React.createElement(coffeeCardPage_1["default"], __assign({ key: index }, coffee)) });
    }));
};
exports["default"] = ProductsRouting;
