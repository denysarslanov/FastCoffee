"use strict";
exports.__esModule = true;
exports.customizationServerToState = exports.coffeeServerToState = void 0;
var calculates_1 = require("./calculates");
var coffeeGroupToState = function (data) {
    var products = [];
    data.map(function (i, index) {
        var defaultPrice = i.defaultPrice, group_id = i.group_id, name = i.name, price = i.price, text = i.text;
        console.log({ i: i });
        var imgLink = calculates_1.getCoffeeGroupImgLink(i.name);
        var obj = {
            defaultPrice: defaultPrice,
            groupId: group_id,
            name: name,
            price: price,
            text: text,
            products: [],
            imgLink: imgLink,
            url: name
        };
        products.push(obj);
    });
    return products;
};
exports.coffeeServerToState = function (cofeeServer) {
    var result = [];
    cofeeServer.map(function (item) {
        var imageLink = calculates_1.getCoffeeImageLink(item.coffee_url);
        var obj = {
            name: item.coffee_name,
            text: item.coffee_text,
            price: item.coffee_price_string,
            imgLink: imageLink,
            url: item.coffee_url,
            defaultPrice: item.coffee_default_price,
            parentGroupId: item.group_id
        };
        if (!!item.coffee_additional_info)
            obj.additionalInfo = item.coffee_additional_info;
        result.push(obj);
    });
    return result;
};
exports.customizationServerToState = function (customizationServerArr) {
    var result = {
        sizes: undefined,
        flavors: null
    };
    var sizes = { m: { price: 10, size: '100' } };
    customizationServerArr.map(function (customization) {
        sizes[customization.size] = { price: customization.coffee_price, size: customization.coffee_actual_size };
    });
    result.sizes = sizes;
    console.log(result.sizes, 'SIZES');
    return result;
};
exports["default"] = coffeeGroupToState;
