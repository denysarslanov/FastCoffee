"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var rootReducer_1 = require("./reducers/rootReducer");
var redux_thunk_1 = require("redux-thunk");
var store = toolkit_1.configureStore({
    reducer: rootReducer_1["default"],
    middleware: function () { return new toolkit_1.Tuple(redux_thunk_1.thunk); }
});
exports["default"] = store;
