"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = function (x) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (v, f) { return f(v); }, x);
};
exports.compose = function (x) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduceRight(function (v, f) { return f(v); }, x);
};
