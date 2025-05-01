"use strict";
exports.__esModule = true;
var React = require("react");
var NavbarLink_1 = require("../../ui/NavbarLink/NavbarLink");
var Navbar_module_css_1 = require("./Navbar.module.css");
var config_1 = require("../../../core/config");
var ButterMenu_1 = require("../../ui/ButterMenu/ButterMenu");
var nav = config_1["default"].nav;
var group = nav.group, index = nav.index, items = nav.items, privacyPolicy = nav.privacyPolicy, terms = nav.terms;
var links = [
    { linkTo: "/" + items, text: 'Уся кава' },
    { linkTo: "/contacts", text: 'Контакти' },
    { linkTo: '/about', text: 'Про нас' }
];
var Navbar = function (_a) {
    var black = _a.black;
    var _b = React.useState(false), isBurgerOpened = _b[0], setIsBurgerOpened = _b[1];
    var propsForHeaderLink = typeof black === 'boolean' ? black : false;
    var _c = React.useState(!!propsForHeaderLink ? 'dark' : 'white'), burgerTheme = _c[0], setBurgerTheme = _c[1];
    React.useEffect(function () {
        !!isBurgerOpened ? setBurgerTheme('white') : setBurgerTheme(!!propsForHeaderLink ? 'dark' : 'white');
    }, [isBurgerOpened]);
    React.useEffect(function () {
        setBurgerTheme(!!propsForHeaderLink ? 'dark' : 'white');
    }, [black]);
    return React.createElement(React.Fragment, null,
        React.createElement("nav", { className: Navbar_module_css_1["default"].navbar + " " + (isBurgerOpened ? Navbar_module_css_1["default"].opened : false) },
            React.createElement("ul", { className: Navbar_module_css_1["default"].navbar__list },
                links.map(function (i, index) { return React.createElement(NavbarLink_1["default"], { key: index, text: i.text, linkTo: i.linkTo, black: burgerTheme === 'dark' ? true : false }); }),
                React.createElement("div", { className: Navbar_module_css_1["default"].burgerContainer, onClick: function () { return setIsBurgerOpened(!isBurgerOpened); } },
                    React.createElement(ButterMenu_1["default"], { theme: burgerTheme, isOpened: isBurgerOpened })))));
};
exports["default"] = Navbar;
