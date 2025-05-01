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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./index.css");
var React = require("react");
var main_1 = require("./pages/main");
var react_router_dom_1 = require("react-router-dom");
var allItemsPage_1 = require("./pages/allItemsPage");
var react_redux_1 = require("react-redux");
var selectors_1 = require("./core/selectors");
var coffeeCardPage_1 = require("./pages/coffeeCardPage");
var config_1 = require("./core/config");
var privacyPolicyPage_1 = require("./pages/privacyPolicyPage");
var coffeeService_1 = require("./core/services/coffeeService");
var rootActions_1 = require("./core/store/actions/rootActions");
var fromServerModelToState_1 = require("./core/utils/fromServerModelToState");
var terms_1 = require("./pages/terms");
var nav = config_1["default"].nav;
var group = nav.group, index = nav.index, items = nav.items, privacyPolicy = nav.privacyPolicy, terms = nav.terms;
var App = function (_a) {
    var allCardsPages = _a.allCardsPages, windowRef = _a.windowRef;
    var _b = React.useState(false), loading = _b[0], setLoading = _b[1];
    var dispatch = react_redux_1.useDispatch();
    React.useEffect(function () {
        setLoading(true);
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffeeService_1["default"].getAllCoffeeGroups()];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            dispatch(rootActions_1.setCoffeeGroups(fromServerModelToState_1["default"](response)));
                            setLoading(false);
                        }
                        else {
                            setLoading(false);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
        return function () {
            setLoading(false);
        };
    }, [dispatch]);
    return React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/:contacts?/', index: true, element: React.createElement(main_1["default"], { isLoading: loading }) }),
                React.createElement(react_router_dom_1.Route, { path: '/:about?/', index: true, element: React.createElement(main_1["default"], { isLoading: loading }) }),
                React.createElement(react_router_dom_1.Route, { path: '/coffee/:url', element: React.createElement(allItemsPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/coffee/', element: React.createElement(allItemsPage_1["default"], null) }),
                allCardsPages.map(function (coffee, index) {
                    return React.createElement(react_router_dom_1.Route, { path: selectors_1.getNavLinks().item + "/" + coffee.url + "/", element: React.createElement(coffeeCardPage_1["default"], __assign({ key: index }, coffee)) });
                }),
                React.createElement(react_router_dom_1.Route, { path: 'products/:product', element: React.createElement(coffeeCardPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/" + privacyPolicy, element: React.createElement(privacyPolicyPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/" + terms, element: React.createElement(terms_1["default"], null) }))));
};
var mapStateToProps = function (state) { return ({
    allCardsPages: selectors_1.getAllItems(state)
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, null)(App);
