import { error } from "console";
import express, { NextFunction, Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const middleware =
  (name: string) => (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };

app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
app.get("/ab*cd", (req: Request, res: Response) => res.send("/ab*cd")); //string Pattern
app.get(/abc/, (req: Request, res: Response) => res.send("abc")); //regEX Pattern

async function throwsError() {
  throw new Error("Boom!!");
}
//Error handling route
app.get("/error", async (req: Request, res: Response) => {
  try {
    await throwsError();
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500);
  }
});
app.use(middleware("Harsh Does Code")); //making middleware to use globally with route

// route with req params & explaing middleware using next()
app.get(
  "/api/books/:bookId",
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    // @ts-ignore
    res.send(res.locals.name);
    next();
  }
);

//Request Chaining
app
  .route("/api/books")
  .get((req: Request, res: Response) => {
    return res.send("Made a get request");
  })
  .post((req: Request, res: Response) => {
    return res.send("Made a post request");
  })
  .put((req: Request, res: Response) => {
    return res.send("Made a put request");
  })
  .delete((req: Request, res: Response) => {
    return res.send("Made a delete request");
  });

app.listen(3000, () => {
  console.log("Server listening on 3000...");
});
