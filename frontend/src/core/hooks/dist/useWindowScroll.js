"use strict";
exports.__esModule = true;
var React = require("react");
// VERY VERY EXPENSIVE
var useWindowScroll = function () {
    var _a = React.useState(0), scroll = _a[0], setScroll = _a[1];
    var _b = React.useState(window.innerHeight), deviceHeight = _b[0], setDeviceHeight = _b[1];
    window.onresize = function () {
        setDeviceHeight(window.innerHeight);
    };
    window.onscroll = function () {
        if (scroll < deviceHeight) {
            if (window.scrollY > deviceHeight)
                setScroll(window.scrollY);
        }
        else {
            if (window.scrollY < deviceHeight)
                setScroll(window.scrollY);
        }
    };
    return [scroll, deviceHeight];
};
exports["default"] = useWindowScroll;
