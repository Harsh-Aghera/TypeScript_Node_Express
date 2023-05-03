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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const users = express_1.default.Router();
exports.users = users;
users.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const api_response = yield (0, axios_1.default)({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "get",
        });
        res.status(200).json(api_response.data);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
users.get("/:isbn", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isbn = +req.params.isbn;
        const api_response = yield (0, axios_1.default)({
            url: "https://jsonplaceholder.typicode.com/users/" + isbn,
            method: "get",
        });
        res.status(200).json(api_response.data);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
users.put("/:isbn", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isbn = +req.params.isbn;
        let api_response = yield (0, axios_1.default)({
            url: "https://jsonplaceholder.typicode.com/users/" + isbn,
            method: "put",
        });
        res.status(200).json(api_response.data);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
users.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let api_response = yield (0, axios_1.default)({
            url: "https://jsonplaceholder.typicode.com/users/",
            method: "post",
        });
        res.status(200).json(api_response.data);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
users.delete("/:isbn", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isbn = +req.params.isbn;
        const api_response = yield (0, axios_1.default)({
            url: "https://jsonplaceholder.typicode.com/users/" + isbn,
            method: "delete",
        });
        res.status(200).json(api_response.data);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
