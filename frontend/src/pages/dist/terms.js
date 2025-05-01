"use strict";
exports.__esModule = true;
var React = require("react");
var NavbarWrapper_1 = require("../components/ordinary/NavbarWrapper/NavbarWrapper");
var Termas_1 = require("../components/simple/Terms/Termas");
var constants_1 = require("../core/constants");
var TermsPage = function () {
    return React.createElement(React.Fragment, null,
        React.createElement(NavbarWrapper_1["default"], { black: true }),
        React.createElement(Termas_1["default"], { terms: constants_1.termsAndConditions }));
};
exports["default"] = TermsPage;
