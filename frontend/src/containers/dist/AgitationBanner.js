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
var React = require("react");
var Banner_1 = require("../components/simple/Banner/Banner");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../core/selectors");
var List_1 = require("../components/ui/List");
var AgitationBanner = function (props) {
    return React.createElement(React.Fragment, null, typeof props.text === 'string' ? React.createElement(Banner_1["default"], __assign({}, props)) :
        !!Array.isArray(props.content) ? React.createElement(Banner_1["default"], __assign({}, props, { text: React.createElement(List_1["default"], { list: __spreadArrays(props.content) }) })) : React.createElement(React.Fragment, null));
};
var mapStateToProps = function (state) { return selectors_1.getAgitationBanner(state); };
exports["default"] = react_redux_1.connect(mapStateToProps, null)(AgitationBanner);
