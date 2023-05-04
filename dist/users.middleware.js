"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const middleware = function (req, res) {
    return () => { console.log("Middleware"); };
};
exports.middleware = middleware;
