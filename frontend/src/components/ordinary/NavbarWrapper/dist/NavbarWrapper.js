"use strict";
exports.__esModule = true;
var React = require("react");
var NavbarWrapper_module_css_1 = require("./NavbarWrapper.module.css");
var Navbar_1 = require("../../simple/Navbar/Navbar");
var react_router_dom_1 = require("react-router-dom");
var constants_1 = require("../../../core/constants");
var config_1 = require("../../../core/config");
var useWindowScroll_1 = require("../../../core/hooks/useWindowScroll");
var NavbarWrapper = function (_a) {
    var black = _a.black, isFixed = _a.isFixed;
    var _b = useWindowScroll_1["default"](), scroll = _b[0], deviceHeight = _b[1];
    var _c = React.useState(typeof black === 'undefined' ? false : black), blackState = _c[0], setBlackState = _c[1];
    var navbarClass = blackState === true ? NavbarWrapper_module_css_1["default"].navbarContentBlack : NavbarWrapper_module_css_1["default"].navbarContainer;
    React.useEffect(function () {
        if (!isFixed)
            return function () { };
        if (scroll > deviceHeight)
            setBlackState(true);
        else if (scroll > 0 && scroll <= deviceHeight)
            setBlackState(false);
    }, [scroll]);
    React.useEffect(function () {
        console.log({ blackState: blackState });
    }, [blackState]);
    return React.createElement(React.Fragment, null,
        React.createElement("div", { className: navbarClass, style: !!isFixed ? { position: 'fixed', top: 0, left: 0, width: '100vw' } : { position: 'static' } },
            React.createElement("h1", { className: NavbarWrapper_module_css_1["default"].logoContainer },
                React.createElement(react_router_dom_1.NavLink, { to: config_1["default"].nav.index }, constants_1.COMPANY)),
            React.createElement("div", { className: NavbarWrapper_module_css_1["default"].nav },
                React.createElement(Navbar_1["default"], { black: blackState }))));
};
exports["default"] = NavbarWrapper;
