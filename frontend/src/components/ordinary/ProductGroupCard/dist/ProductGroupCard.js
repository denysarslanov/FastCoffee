"use strict";
exports.__esModule = true;
var React = require("react");
var ProductGroupCard_module_css_1 = require("./ProductGroupCard.module.css");
var useMediumProuctsPrice_1 = require("../../../core/hooks/useMediumProuctsPrice");
var useMinMaxProducts_1 = require("../../../core/hooks/useMinMaxProducts");
var react_router_dom_1 = require("react-router-dom");
var config_1 = require("../../../core/config");
var ProductGroupCard = function (_a) {
    var text = _a.text, name = _a.name, imgLink = _a.imgLink, products = _a.products, groupId = _a.groupId, url = _a.url, price = _a.price;
    var mediumPrice = useMediumProuctsPrice_1["default"](products)[0];
    var _b = useMinMaxProducts_1["default"](price), min = _b[0], max = _b[1];
    return React.createElement("div", { className: ProductGroupCard_module_css_1["default"].card },
        React.createElement(react_router_dom_1.NavLink, { to: "/" + (config_1["default"].nav.items + url), className: ProductGroupCard_module_css_1["default"].invisibleLink }),
        React.createElement("div", { className: ProductGroupCard_module_css_1["default"].card__hover },
            React.createElement("ul", { className: ProductGroupCard_module_css_1["default"].cardHover__list },
                React.createElement("li", { className: ProductGroupCard_module_css_1["default"].cardHover__listItem },
                    React.createElement("p", null, text)))),
        React.createElement("h4", { className: ProductGroupCard_module_css_1["default"].card__title }, name),
        React.createElement("div", { className: ProductGroupCard_module_css_1["default"].card__content },
            React.createElement("img", { className: ProductGroupCard_module_css_1["default"].card__img, src: imgLink, alt: 'Just Coffee' })));
};
exports["default"] = ProductGroupCard;
