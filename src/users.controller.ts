import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const middleware = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const Schema = Joi.object({
    id: Joi.number().min(1).required(),
    name: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9, ]/)
      .max(30),
    username: Joi.string()
      .pattern(/^[a-zA-Z0-9, ]/)
      .max(30),
    email: Joi.string()
      .email(),
    address: Joi.object().allow(''),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/),
    website : Joi.string().allow(''),
    company: Joi.object().allow('')
  });
  if (req.method === "POST" || req.method === "PUT") {
    const { error, value } = Schema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      res.send(error.details);
    }
  }
  if(req.method==='GET' || req.method==='DELETE'){
    next();
  }
};

export { middleware };
