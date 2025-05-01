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
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../core/selectors");
var useCustomization_1 = require("../../../core/hooks/useCustomization");
var CustomizationCard_module_css_1 = require("./CustomizationCard.module.css");
var Size_1 = require("../../ui/Size/Size");
var calculates_1 = require("../../../core/utils/calculates");
var useEffect = React.useEffect;
var CustomizationCard = function (_a) {
    var url = _a.url, defaultPrice = _a.defaultPrice;
    var _b = useCustomization_1["default"](url), sizes = _b.sizes, handleCustomization = _b.handleCustomization;
    var defaultSize = sizes !== null && sizes !== undefined ? sizes.m : { price: defaultPrice, size: null };
    var _c = React.useState(defaultSize), activeSize = _c[0], setActiveSize = _c[1];
    var customizationHandlerWasCalled = false;
    useEffect(function () {
        setActiveSize(defaultSize);
    }, [sizes]);
    useEffect(function () {
        if (!!url && typeof url === 'string' && !customizationHandlerWasCalled) {
            handleCustomization(url);
        }
    }, [url]);
    var handleSetActiveSize = function (value) {
        setActiveSize(value);
    };
    var sizesObj = JSON.parse(JSON.stringify(sizes));
    var getIsCurrentCardActive = function (size) {
        if (typeof activeSize.size !== 'string' || !sizesObj || typeof sizesObj[size] === 'undefined')
            return false;
        var foundSize = sizesObj[size];
        return calculates_1.getNumberFromSize(activeSize.size) === calculates_1.getNumberFromSize(foundSize.size);
    };
    return React.createElement(React.Fragment, null, sizes === undefined && sizes === null ? React.createElement(React.Fragment, null) : React.createElement("div", { className: CustomizationCard_module_css_1["default"].sizes },
        React.createElement("h3", { className: CustomizationCard_module_css_1["default"].sizes__title }, "\u0420\u043E\u0437\u043C\u0456\u0440\u0438"),
        sizesObj === null || sizesObj === undefined ? React.createElement(React.Fragment, null) : React.createElement("div", { className: CustomizationCard_module_css_1["default"].sizes__content },
            's' in sizesObj ? React.createElement(Size_1["default"], { callback: function () { return handleSetActiveSize(__assign({}, sizesObj.s)); }, size: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439", active: getIsCurrentCardActive('s') }) : React.createElement(React.Fragment, null),
            React.createElement(Size_1["default"], { callback: function () { return handleSetActiveSize(__assign({}, sizesObj.m)); }, size: "\u0417\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439", active: getIsCurrentCardActive('m') }),
            'l' in sizesObj ? React.createElement(Size_1["default"], { callback: function () { return handleSetActiveSize(__assign({}, sizesObj.l)); }, size: "\u0412\u0435\u043B\u0438\u043A\u0438\u0439", active: getIsCurrentCardActive('l') }) : React.createElement(React.Fragment, null),
            'xl' in sizesObj ? React.createElement(Size_1["default"], { callback: function () { return handleSetActiveSize(__assign({}, sizesObj.xl)); }, size: "\u0415\u043A\u0441\u0442\u0440\u0430 \u0412\u0435\u043B\u0438\u043A\u0438\u0439", active: getIsCurrentCardActive('xl') }) : React.createElement(React.Fragment, null)),
        React.createElement("div", { className: CustomizationCard_module_css_1["default"].customization__price },
            React.createElement("h4", null,
                "\u0426\u0456\u043D\u0430: ",
                activeSize !== undefined && activeSize !== null ? activeSize.price : defaultPrice,
                " \u20B4",
                activeSize !== undefined && activeSize !== null && activeSize.size !== null ? React.createElement("span", null,
                    "  ( ",
                    activeSize.size,
                    " \u043C\u043B )") : React.createElement(React.Fragment, null)))));
};
var mapStateToProps = function (state) { return ({
    url: selectors_1.getActiveCardUrl(state)
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, null)(CustomizationCard);
