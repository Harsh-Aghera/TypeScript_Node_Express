"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const joi_1 = __importDefault(require("joi"));
const Schema = joi_1.default.object({
    id: joi_1.default.number().min(1).required(),
    name: joi_1.default.string()
        .required()
        .pattern(/^[a-zA-Z0-9, ]/)
        .max(30),
    username: joi_1.default.string()
        .pattern(/^[a-zA-Z0-9, ]/)
        .max(30),
    email: joi_1.default.string()
        .email(),
    address: joi_1.default.object().allow(''),
    phone: joi_1.default.string().length(10).pattern(/^[0-9]+$/),
    website: joi_1.default.string().allow(''),
    company: joi_1.default.object().allow('')
});
exports.Schema = Schema;
