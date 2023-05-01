"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
let books = require("/Projects/Joi_Type_Exp/bookdb.js");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
    if (req.method === "POST") {
        const { error, value } = Schema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            res.send(error.details);
        }
    }
    next();
};
app.use(middleware);
app.get("/books", (req, res) => {
    res.send(books);
});
app.get("/books/:isbn", (req, res) => {
    const isbn = +req.params.isbn;
    if (books[isbn] != null) {
        res.send(books[isbn]);
    }
    else {
        res.send("ISBN don't exist");
    }
});
app.post("/books", (req, res) => {
    const body = req.body;
    res.send(body);
    books.push(body);
});
app.listen(PORT, () => console.log("Server is running"));
