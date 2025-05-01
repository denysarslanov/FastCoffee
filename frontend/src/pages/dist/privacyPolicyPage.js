"use strict";
exports.__esModule = true;
var React = require("react");
var NavbarWrapper_1 = require("../components/ordinary/NavbarWrapper/NavbarWrapper");
var PrivacyPolicy_1 = require("../components/ordinary/PrivacyPolicy/PrivacyPolicy");
var privacyPolicy_module_css_1 = require("../styles/privacyPolicy.module.css");
var Footer_1 = require("../components/ordinary/Footer/Footer");
var BlockTitle_1 = require("../components/simple/Navbar/BlockTitle/BlockTitle");
var PrivacyPolicyPage = function () {
    return React.createElement(React.Fragment, null,
        React.createElement(NavbarWrapper_1["default"], { black: true }),
        React.createElement(BlockTitle_1["default"], { title: "Privacy Policy" }),
        React.createElement("main", { className: privacyPolicy_module_css_1["default"].privacyWrapper },
            React.createElement(PrivacyPolicy_1["default"], null)),
        React.createElement(Footer_1["default"], null));
};
exports["default"] = PrivacyPolicyPage;
