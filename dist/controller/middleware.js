"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const joi_1 = __importDefault(require("joi"));
const middleware = function (req, res, next) {
    const Schema = joi_1.default.object({
        author: joi_1.default.string()
            .required()
            .pattern(/^[a-zA-Z0-9, ]/)
            .max(30),
        title: joi_1.default.string()
            .required()
            .pattern(/^[a-zA-Z0-9, ]/)
            .max(30),
        reviews: joi_1.default.string()
            .pattern(/^[a-zA-Z0-9, ]/)
            .max(100)
            .allow(""),
    });
    if (req.method === "POST" || req.method === "PUT") {
        const { error, value } = Schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            res.send(error.details);
        }
    }
    next();
};
exports.middleware = middleware;
