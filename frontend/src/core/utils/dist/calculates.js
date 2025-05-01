"use strict";
exports.__esModule = true;
exports.getNumberFromSize = exports.getCoffeeGroupImgLink = exports.getCoffeeImageLink = exports.getMinMax = exports.calculateMediumProductsPrice = void 0;
var americano_jpg_1 = require("../../assets/images/americano.jpg");
var _62037_min_jpg_1 = require("../../assets/images/62037-min.jpg");
var black_tea_jpg_1 = require("../../assets/images/black-tea.jpg");
var cacao_jpg_1 = require("../../assets/images/cacao.jpg");
var cappuccino_jpg_1 = require("../../assets/images/cappuccino.jpg");
var caramel_latte_jpg_1 = require("../../assets/images/caramel-latte.jpg");
var flat_white_jpg_1 = require("../../assets/images/flat-white.jpg");
var fruit_smoothie_jpg_1 = require("../../assets/images/fruit-smoothie.jpg");
var fruit_tea_jpg_1 = require("../../assets/images/fruit-tea.jpg");
var ginger_tea_jpg_1 = require("../../assets/images/ginger-tea.jpg");
var hot_chocolate_jpg_1 = require("../../assets/images/hot-chocolate.jpg");
var ice_latte_jpg_1 = require("../../assets/images/ice-latte.jpg");
var latte_jpg_1 = require("../../assets/images/latte.jpg");
var tea_matcha_jpg_1 = require("../../assets/images/tea-matcha.jpg");
var espresso_jpg_1 = require("../../assets/images/espresso.jpg");
var double_espresso_jpg_1 = require("../../assets/images/double-espresso.jpg");
var Mokachino_jpg_1 = require("../../assets/images/Mokachino.jpg");
var caramel_latte_jpg_2 = require("../../assets/images/caramel-latte.jpg");
var green_tea_jpg_1 = require("../../assets/images/green-tea.jpg");
var hot_tea_jpg_1 = require("../../assets/images/hot-tea.jpg");
var tea_latte_jpg_1 = require("../../assets/images/tea-latte.jpg");
var milkshake_jpg_1 = require("../../assets/images/milkshake.jpg");
var smoothie_mango_banana_jpg_1 = require("../../assets/images/smoothie-mango-banana.jpg");
var smoothie_pineapple_coconut_jpg_1 = require("../../assets/images/smoothie-pineapple-coconut.jpg");
var green_detox_smoothie_jpg_1 = require("../../assets/images/green-detox-smoothie.jpg");
var smoothie_avocado_kiwi_jpg_1 = require("../../assets/images/smoothie-avocado-kiwi.jpg");
var constants_1 = require("../constants");
var coffeeIcons = new Map([
    ['americano', americano_jpg_1["default"]],
    ['defaultCoffee', _62037_min_jpg_1["default"]],
    ['black_tea', black_tea_jpg_1["default"]],
    ['cacao', cacao_jpg_1["default"]],
    ['cappuccino', cappuccino_jpg_1["default"]],
    ['carame_lLatte', caramel_latte_jpg_1["default"]],
    ['flat_white', flat_white_jpg_1["default"]],
    ['fruit_smoothie', fruit_smoothie_jpg_1["default"]],
    ['fruit_tea', fruit_tea_jpg_1["default"]],
    ['ginger_tea', ginger_tea_jpg_1["default"]],
    ['green_smoothie', green_detox_smoothie_jpg_1["default"]],
    ['hot_chocolate', hot_chocolate_jpg_1["default"]],
    ['ice_latte', ice_latte_jpg_1["default"]],
    ['latte', latte_jpg_1["default"]],
    ['tea_matcha', tea_matcha_jpg_1["default"]],
    ['espresso', espresso_jpg_1["default"]],
    ['double_espresso', double_espresso_jpg_1["default"]],
    ['Mokachino', Mokachino_jpg_1["default"]],
    ['caramel_latte', caramel_latte_jpg_2["default"]],
    ['green_tea', green_tea_jpg_1["default"]],
    ['hot_tea', hot_tea_jpg_1["default"]],
    ['tea_latte', tea_latte_jpg_1["default"]],
    ['milkshake', milkshake_jpg_1["default"]],
    ['smoothie_mango_banana', smoothie_mango_banana_jpg_1["default"]],
    ['smoothie_pineapple_coconut', smoothie_pineapple_coconut_jpg_1["default"]],
    ['green_smoothie', green_detox_smoothie_jpg_1["default"]],
    ['smoothie_avocado_kiwi', smoothie_avocado_kiwi_jpg_1["default"]]
]);
var fromServerImgNameToFront = function (s) { return s.replace(/-/g, '_'); };
exports.calculateMediumProductsPrice = function (products) { return function () {
    if (products.length < 1)
        return 0;
    return products.reduce(function (acc, val) { return acc + val.defaultPrice; }, products[0].defaultPrice);
}; };
exports.getMinMax = function (products, operator) { return function () {
    if (products.length < 1)
        return 0;
    return products.reduce(function (acc, val) {
        if (operator === 'max') {
            if (acc > val.defaultPrice)
                return acc;
            else
                return val.defaultPrice;
        }
        if (operator === 'min') {
            if (acc < val.defaultPrice)
                return acc;
            else
                return val.defaultPrice;
        }
        return 0;
    }, products[0].defaultPrice);
}; };
exports.getCoffeeImageLink = function (s) {
    var editedName = fromServerImgNameToFront(s);
    console.log({ s: s, editedName: editedName });
    var value = _62037_min_jpg_1["default"];
    if (coffeeIcons.has(editedName))
        value = coffeeIcons.get(editedName);
    return value;
};
exports.getCoffeeGroupImgLink = function (s) {
    var img = constants_1.coffeeGroupsImgLinks.get(s);
    if (typeof img === 'string')
        return img;
    return _62037_min_jpg_1["default"];
};
exports.getNumberFromSize = function (size) { return Number(size.split('ml')[0]); };
