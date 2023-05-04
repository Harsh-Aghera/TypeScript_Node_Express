import { Request, Response, NextFunction } from "express";

const validateSchema = function (joiSchema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    joiSchema
      .validateAsync(req.body, {
        abortEarly: false,
      })
      .then(next())
      .catch((err: Error) => {
        next(err);
      });
  };
};

const updateUser = async function updateUser(req: Request, res: Response) {
  try {
    res.status(200).send("Data Updated..");
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async function createUser(req: Request, res: Response) {
  try {
    res.status(200).send("User added....");
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { validateSchema, updateUser, createUser };
