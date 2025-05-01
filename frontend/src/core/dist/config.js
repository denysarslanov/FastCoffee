"use strict";
exports.__esModule = true;
var config = {
    nav: {
        index: '/',
        items: 'coffee/',
        group: 'coffee/',
        privacyPolicy: 'privacyPolicy',
        terms: 'terms',
        item: '/products'
    },
    apiUrl: {
        baseApiUrl: 'http://localhost:3001/coffee',
        getCustomization: 'customization/',
        groups: 'groups',
        coffeeByGroupName: '',
        randomCoffee: 'random/',
        coffeeByUrl: 'coffeeList/'
    }
};
var navLinks = Object.values(config.nav);
exports["default"] = config;
