"use strict";
exports.__esModule = true;
var React = require("react");
var ProductCard_module_css_1 = require("./ProductCard.module.css");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var rootActions_1 = require("../../../core/store/actions/rootActions");
var CustomizationCard_1 = require("../CustomizationCard/CustomizationCard");
var selectors_1 = require("../../../core/selectors");
var useEffect = React.useEffect;
var ProductCard = function (_a) {
    var text = _a.text, name = _a.name, price = _a.price, imgLink = _a.imgLink, url = _a.url, forPage = _a.forPage, additionalInfo = _a.additionalInfo, groupId = _a.groupId, defaultPrice = _a.defaultPrice, flavors = _a.flavors;
    var dispatch = react_redux_1.useDispatch();
    useEffect(function () {
        dispatch(rootActions_1.setActiveCard(url));
        return function () {
            dispatch(rootActions_1.setActiveCard(null));
        };
    }, [url]);
    var cardForPage = !!forPage ? forPage : false;
    return React.createElement("div", { className: !!cardForPage ? ProductCard_module_css_1["default"].cardPageWrapper : ProductCard_module_css_1["default"].defaultCardWrapper },
        React.createElement("div", { className: ProductCard_module_css_1["default"].card, style: cardForPage === true ? { flexFlow: 'row wrap' } : {} },
            cardForPage === true ? React.createElement(React.Fragment, null) : React.createElement("h4", { className: ProductCard_module_css_1["default"].card__title }, name),
            React.createElement("div", { className: ProductCard_module_css_1["default"].card__content },
                React.createElement("img", { className: ProductCard_module_css_1["default"].card__img, src: imgLink, alt: 'Just Coffee' }),
                React.createElement("div", { className: ProductCard_module_css_1["default"].card__textContainer },
                    !!cardForPage ? React.createElement(React.Fragment, null) : React.createElement("p", { className: ProductCard_module_css_1["default"].card__price },
                        "Price : ",
                        React.createElement("span", { className: ProductCard_module_css_1["default"].priceNumber }, price)),
                    !!cardForPage ? React.createElement(React.Fragment, null) : React.createElement("p", { className: ProductCard_module_css_1["default"].card__mainText }, text))),
            !cardForPage ? React.createElement("div", { className: ProductCard_module_css_1["default"].cardLinkWrapper },
                React.createElement(react_router_dom_1.NavLink, { to: selectors_1.getNavLinks().item + "/" + url })) : React.createElement(React.Fragment, null),
            !!cardForPage ? React.createElement("div", { className: ProductCard_module_css_1["default"].card__customization },
                React.createElement(CustomizationCard_1["default"], { defaultPrice: defaultPrice }),
                React.createElement("p", { className: ProductCard_module_css_1["default"].card__mainText }, text),
                React.createElement("div", { className: ProductCard_module_css_1["default"].card__additionalInfo },
                    React.createElement("p", { className: ProductCard_module_css_1["default"].card__text }, additionalInfo))) : React.createElement(React.Fragment, null)));
};
//  {!!flavors ? <Flavors flavors={flavors as CoffeeFlavors} /> : <p>Немає додатків</p>}
exports["default"] = ProductCard;
