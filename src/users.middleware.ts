import { Request, Response, NextFunction } from "express";

const validateSchema = function (joiSchema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    joiSchema.validateAsync(req.body, {
      abortEarly: false,
    })
    .then(() => {
      next();
    })
    .catch((err: Error) => {
      next(err);
    });
  };
};
export { validateSchema};
