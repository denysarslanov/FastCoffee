"use strict";
exports.__esModule = true;
var React = require("react");
var terms_module_css_1 = require("./terms.module.css");
var BlockTitle_1 = require("../Navbar/BlockTitle/BlockTitle");
var TermPoint = function (_a) {
    var termPoints = _a.termPoints, title = _a.title;
    return React.createElement("li", { className: terms_module_css_1["default"].termItem },
        React.createElement("h4", { className: terms_module_css_1["default"].point__title }, title),
        termPoints.map(function (i, index) { return React.createElement("p", { className: terms_module_css_1["default"].termItem__point }, i); }));
};
var Terms = function (_a) {
    var terms = _a.terms;
    return React.createElement("main", { className: terms_module_css_1["default"].terms },
        React.createElement("section", { className: terms_module_css_1["default"].terms__title },
            React.createElement(BlockTitle_1["default"], { title: '\u0423\u043C\u043E\u0432\u0438 \u0442\u0430 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F', text: '\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E Fast Coffee! \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u043D\u0430\u0448 \u0432\u0435\u0431\u0441\u0430\u0439\u0442 \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0443\u043C\u043E\u0432 \u0442\u0430 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044C. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0443\u0432\u0430\u0436\u043D\u043E \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0442\u0435\u0441\u044C \u0456\u0437 \u043D\u0438\u043C\u0438 \u043F\u0435\u0440\u0435\u0434 \u0442\u0438\u043C, \u044F\u043A \u0440\u043E\u0431\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F\u0442\u0438 \u0437 \u043D\u0430\u0448\u0438\u043C \u0441\u0430\u0439\u0442\u043E\u043C.' })),
        React.createElement("section", { className: terms_module_css_1["default"].terms__content },
            React.createElement("ul", { className: terms_module_css_1["default"].terms__list }, terms.map(function (i, index) { return React.createElement(TermPoint, { title: i.title, termPoints: i.data }); }))));
};
exports["default"] = Terms;
