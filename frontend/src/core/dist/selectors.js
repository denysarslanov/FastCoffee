"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getRandomCoffee = exports.getAgitationBanner = exports.getActiveCardUrl = exports.getNavLinks = exports.getItemsByGroupId = exports.getAllItems = exports.getLoadedAllProducts = exports.getAllProductsGroups = void 0;
var config_1 = require("./config");
exports.getAllProductsGroups = function (state) { return state.products; };
exports.getLoadedAllProducts = function (state) { return state.loadedAllProducts; };
exports.getAllItems = function (state) {
    if (state.products.length === 0)
        return [];
    if (state.products.length === 1)
        return state.products[0].products;
    return state.products.reduce(function (acc, val, index) {
        if (index === 0)
            return acc;
        return __spreadArrays(acc, val.products);
    }, state.products[0].products);
};
exports.getItemsByGroupId = function (state, id) {
    var result = state.products.find(function (i) { return i.groupId === id; });
    if (!!result)
        return result.products;
    else
        return null;
};
exports.getNavLinks = function () { return config_1["default"].nav; };
exports.getActiveCardUrl = function (state) { return state.activeCardUrl; };
exports.getAgitationBanner = function (state) { return state.agitationBanner; };
exports.getRandomCoffee = function (state) { return state.randomCoffee; };
