"use strict";
exports.__esModule = true;
var React = require("react");
var ProductsBlock_1 = require("../components/ordinary/ProductsBlock/ProductsBlock");
var ProductsGroupListContainer_1 = require("./ProductsGroupListContainer");
var ProductsContainer = function (props) {
    return React.createElement(React.Fragment, null,
        React.createElement(ProductsBlock_1["default"], null),
        React.createElement(ProductsGroupListContainer_1["default"], null));
};
exports["default"] = ProductsContainer;
