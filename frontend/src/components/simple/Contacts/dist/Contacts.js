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
exports.Contact = void 0;
var React = require("react");
var Contacts_module_css_1 = require("./Contacts.module.css");
var constants_1 = require("../../../core/constants");
var BlockTitle_1 = require("../Navbar/BlockTitle/BlockTitle");
exports.Contact = function (_a) {
    var text = _a.text, imgLink = _a.imgLink;
    return React.createElement("li", { className: Contacts_module_css_1["default"].contact },
        React.createElement("img", { src: imgLink, alt: "contact", className: Contacts_module_css_1["default"].contact__icon }),
        React.createElement("p", { className: Contacts_module_css_1["default"].contact__text }, text));
};
var Contacts = React.forwardRef(function (props, ref) {
    return React.createElement("section", { className: Contacts_module_css_1["default"].contacts, id: "contacts", ref: ref },
        React.createElement(BlockTitle_1["default"], { title: "\u041D\u0430\u0448\u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438" }),
        React.createElement("ul", { className: Contacts_module_css_1["default"].contacts__list }, constants_1.CONTACTS.map(function (i, index) { return React.createElement(exports.Contact, __assign({}, i, { key: index })); })));
});
exports["default"] = Contacts;
