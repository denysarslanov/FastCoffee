"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var AllItems_1 = require("../components/smart/AllItems/AllItems");
var selectors_1 = require("../core/selectors");
var BlockTitle_1 = require("../components/simple/Navbar/BlockTitle/BlockTitle");
var AllItemsContainer = function (_a) {
    var items = _a.items;
    return React.createElement(React.Fragment, null, !!items ? React.createElement(AllItems_1["default"], { items: items }) : React.createElement(BlockTitle_1["default"], { title: "404", text: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E" }));
};
var mapStateToProps = function (state, ownProps) {
    var allItems = false;
    if (!ownProps || react_redux_1.shallowEqual(ownProps, {}))
        allItems = false;
    else
        allItems = 'groupId' in ownProps ? ownProps.groupId : false;
    console.log(selectors_1.getAllItems(state), false);
    return {
        items: allItems === false ? selectors_1.getAllItems(state) : selectors_1.getItemsByGroupId(state, allItems)
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps, null)(AllItemsContainer);
