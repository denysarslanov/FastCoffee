"use strict";
exports.__esModule = true;
exports.defaultScroll = void 0;
var React = require("react");
var HeaderContainer_1 = require("../containers/Header/HeaderContainer");
var ProductsContainer_1 = require("../containers/ProductsContainer");
var main_module_css_1 = require("../styles/main.module.css");
var ShowAllItemsBlock_1 = require("../components/ordinary/ShowAllItemsBlock/ShowAllItemsBlock");
var AgitationBanner_1 = require("../containers/AgitationBanner");
var TryTodayContainer_1 = require("../containers/TryTodayContainer");
var Contacts_1 = require("../components/simple/Contacts/Contacts");
var Footer_1 = require("../components/ordinary/Footer/Footer");
var react_router_1 = require("react-router");
var Preloader_1 = require("../components/simple/Preloader/Preloader");
exports.defaultScroll = function (reactRef) { return reactRef.current.scrollIntoView({
    behavior: "smooth"
}); };
var Main = function (props) {
    if (props === void 0) { props = {}; }
    var loading = !!props.isLoading;
    var params = react_router_1.useParams();
    var refs = {
        contacts: React.useRef(document.createElement("div")),
        about: React.useRef(document.createElement("div"))
    };
    var contacts = refs.contacts, about = refs.about;
    var scrollToBlock = function (r) {
        if (r === void 0) { r = ''; }
        switch (r) {
            case 'contacts':
                if (!!contacts)
                    exports.defaultScroll(contacts);
                return;
            case 'about':
                if (!!about)
                    exports.defaultScroll(about);
                return;
            default:
                return false;
        }
        ;
    };
    React.useEffect(function () {
        if (!!params.contacts && params.contacts in refs)
            scrollToBlock(params.contacts);
        if (!!params.about && params.about in refs)
            scrollToBlock(params.about);
    }, [params]);
    return React.createElement("main", null,
        React.createElement(HeaderContainer_1["default"], null),
        loading === true ? React.createElement(Preloader_1.PreloaderBlock, null) : React.createElement(ProductsContainer_1["default"], null),
        React.createElement(ShowAllItemsBlock_1["default"], null),
        React.createElement("div", { className: main_module_css_1["default"].agitationBanner, ref: about },
            React.createElement(AgitationBanner_1["default"], null)),
        React.createElement("section", { className: main_module_css_1["default"].tryToday },
            React.createElement(TryTodayContainer_1["default"], null)),
        React.createElement("section", { className: main_module_css_1["default"].contactsWrapper },
            React.createElement(Contacts_1["default"], { ref: contacts })),
        React.createElement(Footer_1["default"], null));
};
exports["default"] = Main;
