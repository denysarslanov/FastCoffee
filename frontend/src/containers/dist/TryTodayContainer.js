"use strict";
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../core/selectors");
var TryToday_1 = require("../components/ordinary/TryToday/TryToday");
var rootActions_1 = require("../core/store/actions/rootActions");
var TryTodayContainer = function (props) {
    var _a = React.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var deferredLoading = React.useDeferredValue(isLoading);
    React.useEffect(function () {
        console.log({ isLoading: isLoading });
    }, [isLoading]);
    React.useEffect(function () {
        if (!props.coffee) {
            props.setRandomCoffeeThunk();
        }
        else {
            setIsLoading(false);
        }
    }, [props.coffee]);
    var handleUpdateRandomCoffee = function () {
        if (!isLoading) {
            setIsLoading(true);
            props.setRandomCoffeeThunk();
        }
    };
    return React.createElement(TryToday_1["default"], { coffee: props.coffee, isLoading: deferredLoading, handleUpdateRandomCoffee: handleUpdateRandomCoffee });
};
var mapStateToProps = function (state) { return ({
    coffee: selectors_1.getRandomCoffee(state)
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, { setRandomCoffeeThunk: rootActions_1.setRandomCoffeeThunk })(TryTodayContainer);
