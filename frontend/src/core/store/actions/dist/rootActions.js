"use strict";
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
exports.setRandomCoffeeThunk = exports.setCoffeeThunk = exports.nullProductsGroups = exports.setRandomCoffee = exports.setIsAllProductsLoaded = exports.setCoffeeProductToGroup = exports.setCoffeeGroups = exports.setActiveCard = void 0;
var coffeeService_1 = require("../../services/coffeeService");
var fromServerModelToState_1 = require("../../utils/fromServerModelToState");
exports.setActiveCard = function (url) { return ({
    type: 'SET_ACTIVE_CARD',
    payload: url
}); };
exports.setCoffeeGroups = function (coffeeGroups) { return ({
    type: "SET_COFFEE_GROUPS",
    payload: coffeeGroups
}); };
exports.setCoffeeProductToGroup = function (coffee) { return ({
    type: 'SET_COFFEE_PRODUCTS_TO_GROUP',
    payload: coffee
}); };
exports.setIsAllProductsLoaded = function (value) { return ({
    type: 'SET_ALL_PRODUCTS_LOADED',
    payload: value
}); };
exports.setRandomCoffee = function (coffee) { return ({
    type: 'SET_RANDOM_CARD',
    payload: coffee
}); };
exports.nullProductsGroups = function () { return ({
    type: 'NULL_PRODUCTS_GROUPS'
}); };
exports.setCoffeeThunk = function (groupName, callBack) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, helper;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = !groupName;
                switch (_a) {
                    case true: return [3 /*break*/, 1];
                    case false: return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, coffeeService_1["default"].getAllCoffee()];
            case 2:
                result = _b.sent();
                dispatch(exports.setIsAllProductsLoaded(true));
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, coffeeService_1["default"].getCoffeeByGroupName(groupName)];
            case 4:
                result = _b.sent();
                return [3 /*break*/, 5];
            case 5:
                if (!result)
                    return [2 /*return*/, false];
                dispatch(exports.nullProductsGroups());
                helper = fromServerModelToState_1.coffeeServerToState(result);
                console.log({ helper: helper });
                fromServerModelToState_1.coffeeServerToState(result).map(function (i) { return dispatch(exports.setCoffeeProductToGroup(i)); });
                if (!!callBack)
                    callBack();
                return [2 /*return*/];
        }
    });
}); }; };
exports.setRandomCoffeeThunk = function () { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                response = void 0;
                return [4 /*yield*/, coffeeService_1["default"].getRandomCoffee()];
            case 1:
                response = _a.sent();
                if (!response)
                    return [2 /*return*/, false];
                dispatch(exports.setRandomCoffee(fromServerModelToState_1.coffeeServerToState(response)[0]));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log({ e: e_1 }, 'In root actions -> setRandomCoffeeThunk');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
