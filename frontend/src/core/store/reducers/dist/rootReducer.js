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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var initialState_1 = require("../initialState");
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState_1["default"]; }
    switch (action.type) {
        case 'SET_ACTIVE_CARD':
            return __assign(__assign({}, state), { activeCardUrl: action.payload });
        case "SET_COFFEE_GROUPS":
            return __assign(__assign({}, state), { products: action.payload });
        case "SET_COFFEE_PRODUCTS_TO_GROUP":
            if (!state)
                return state;
            {
                var productsCopy = __spreadArrays(state.products);
                var foundGroup = productsCopy.find(function (i) { return i.groupId === action.payload.parentGroupId; });
                if (!foundGroup)
                    return state;
                var index = productsCopy.indexOf(foundGroup);
                // PROBLEMS WITH find (ES ISSUSES)
                //DONT KNOW WHY, BECAUSE FIND IS AN OLD FEATURE
                var asCoffee_1 = function (i) { return i; };
                var found = productsCopy[index].products.find(function (i, index) { return asCoffee_1(i).name === action.payload.name; });
                if (found)
                    return state;
                productsCopy[index].products = __spreadArrays(productsCopy[index].products, [__assign({}, action.payload)]);
                return __assign(__assign({}, state), { products: productsCopy });
            }
        case 'NULL_PRODUCTS_GROUPS':
            if (!state)
                return state;
            return __assign(__assign({}, state), { products: __spreadArrays(state.products.map(function (i) { return (__assign(__assign({}, i), { products: [] })); })) });
        case "SET_ALL_PRODUCTS_LOADED":
            return __assign(__assign({}, state), { loadedAllProducts: action.payload });
        case 'SET_RANDOM_CARD':
            return __assign(__assign({}, state), { randomCoffee: action.payload });
        default: {
            return state;
        }
    }
};
exports["default"] = rootReducer;
