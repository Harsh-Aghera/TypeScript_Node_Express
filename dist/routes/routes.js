"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
let books = require("/Projects/Joi_Type_Exp/bookdb.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/", (req, res) => {
    res.send(books);
});
router.get("/:isbn", (req, res) => {
    const isbn = +req.params.isbn;
    if (books[isbn] != null) {
        res.send(books[isbn]);
    }
    else {
        res.send("ISBN don't exist");
    }
});
router.put("/:isbn", (req, res) => {
    const isbn = +req.params.isbn;
    if (books[isbn] != null) {
        books[isbn] = req.body;
        res.send("Book details updated successfully");
    }
    else {
        res.send("ISBN don't exist");
    }
});
router.post("/", (req, res) => {
    const body = req.body;
    res.send(body);
    books.push(body);
});
router.delete("/:isbn", (req, res) => {
    const isbn = +req.params.isbn;
    if (books[isbn] != null) {
        delete books[isbn];
        var filtered = books.filter(function (el) {
            return el != null;
        });
        books = filtered;
        res.send("Book " + isbn + " deleted successfully");
    }
    else {
        res.send("ISBN don't exist");
    }
});
