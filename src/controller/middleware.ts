import { Request, Response, NextFunction } from "express";
import Joi from "joi";

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

export { middleware };
