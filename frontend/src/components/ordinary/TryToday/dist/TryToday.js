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
var TryToday_module_css_1 = require("./TryToday.module.css");
var BlockTitle_1 = require("../../simple/Navbar/BlockTitle/BlockTitle");
var ProductCard_1 = require("../../smart/ProductCard/ProductCard");
var Preloader_1 = require("../../simple/Preloader/Preloader");
var TryToday = function (_a) {
    var coffee = _a.coffee, isLoading = _a.isLoading, handleUpdateRandomCoffee = _a.handleUpdateRandomCoffee;
    React.useEffect(function () {
        console.log({ isLoading: isLoading });
    }, [isLoading]);
    return React.createElement("section", { className: TryToday_module_css_1["default"].tryToday },
        React.createElement("div", { className: TryToday_module_css_1["default"].tryToday__titleWrapper },
            React.createElement(BlockTitle_1["default"], { title: "\u0421\u043F\u0440\u043E\u0431\u0443\u0439 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456" })),
        React.createElement("div", { className: TryToday_module_css_1["default"].cardContainer }, !!isLoading ? React.createElement(Preloader_1["default"], null) : React.createElement(ProductCard_1["default"], __assign({}, coffee))),
        React.createElement("div", { className: TryToday_module_css_1["default"].update },
            React.createElement("button", { className: "defaultBtn", onClick: function () { handleUpdateRandomCoffee(); } }, "\u041E\u043D\u043E\u0432\u0438\u0442\u0438")));
};
exports["default"] = TryToday;
