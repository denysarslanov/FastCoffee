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
var useEffect = React.useEffect, useReducer = React.useReducer;
var useMinMaxProducts = function (minmax) {
    var initial = { min: 0, max: 0 };
    var ChangeMin = function (min) { return ({ type: 'changemin', min: min }); };
    var ChangeMax = function (max) { return ({ type: 'changemax', max: max }); };
    var reducer = function (state, action) {
        if (state === void 0) { state = initial; }
        switch (action.type) {
            case "changemax":
                return __assign(__assign({}, state), { max: action.max });
            case "changemin":
                return __assign(__assign({}, state), { min: action.min });
        }
    };
    var _a = useReducer(reducer, initial), state = _a[0], dispatch = _a[1];
    var min = state.min, max = state.max;
    useEffect(function () {
        if (typeof minmax === 'string') {
            var minmaxArr = minmax.split('-');
            console.log({ minmaxArr: minmaxArr });
            dispatch(ChangeMin(Number(minmaxArr[0].split('(')[1])));
            dispatch(ChangeMax(Number(minmaxArr[1].split(')')[0])));
        }
    }, [minmax]);
    return [min, max];
};
exports["default"] = useMinMaxProducts;
