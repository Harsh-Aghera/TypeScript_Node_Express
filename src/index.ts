import express, { Express, Request, Response, NextFunction } from "express";
import Joi from "joi";
import { router } from './routes/routes'
const PORT: number = 5000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/books',router)

const middleware = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const Schema = Joi.object({
    author: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9, ]/)
      .max(30),
    title: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9, ]/)
      .max(30),
    reviews: Joi.string()
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
app.use(middleware);
app.listen(PORT, () => console.log("Server is running"));
