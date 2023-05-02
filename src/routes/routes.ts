import express, { Request, Response, Router } from "express";
let books = require("/Projects/Joi_Type_Exp/bookdb.js");
const router: Router = express.Router();

router.get("/", async(req: Request, res: Response): Promise<void> => {
  res.send(books);
});

router.get("/:isbn", async(req: Request, res: Response): Promise<void> => {
  const isbn: number = +req.params.isbn;
  if (books[isbn] != null) {
    res.send(books[isbn]);
  } else {
    res.send("ISBN don't exist");
  }
});

router.put("/:isbn", async(req: Request, res: Response): Promise<void> => {
  const isbn: number = +req.params.isbn;
  if (books[isbn] != null) {
    books[isbn] = await req.body;
    res.send("Book details updated successfully");
  } else {
    res.send("ISBN don't exist");
  }
});

router.post("/", async(req: Request, res: Response): Promise<void> => {
  const body = await req.body;
  res.send(body);
  books.push(body);
});

router.delete("/:isbn", (req: Request, res: Response): void => {
  const isbn: number = +req.params.isbn;
  if (books[isbn] != null) {
    delete books[isbn];
    var filtered = books.filter(function (el:string) {
      return el != null;
    });
    books=filtered
    res.send("Book " + isbn + " deleted successfully");
  } else {
    res.send("ISBN don't exist");
  }
});

export { router };
