"use strict";
exports.__esModule = true;
var React = require("react");
var Footer_module_css_1 = require("./Footer.module.css");
var react_router_dom_1 = require("react-router-dom");
var config_1 = require("../../../core/config");
var constants_1 = require("../../../core/constants");
var Footer = function (_a) {
    return React.createElement("footer", { className: Footer_module_css_1["default"].footer },
        React.createElement("div", { className: Footer_module_css_1["default"].footer__block },
            React.createElement("p", { className: Footer_module_css_1["default"].footer__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/" + config_1["default"].nav.privacyPolicy }, "Privacy Policy")),
            React.createElement("p", { className: Footer_module_css_1["default"].footer__item },
                React.createElement(react_router_dom_1.NavLink, { to: "/" + config_1["default"].nav.terms }, "\u0423\u043C\u043E\u0432\u0438 \u0442\u0430 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F"))),
        React.createElement("div", { className: Footer_module_css_1["default"].footer__block }, constants_1.CONTACTS.map(function (i) { return React.createElement("p", null, i.text); })));
};
exports["default"] = Footer;
