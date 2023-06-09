import express, { Request, Response, Router } from "express";
import { validateSchema} from "./users.middleware";
import { Schema } from "./users.schema";
import axios from "axios";
const users: Router = express.Router();

users.put("/:isbn", validateSchema(Schema), updateUser);
users.post("/", validateSchema(Schema), createUser);
async function updateUser(req: Request, res: Response) {
  try {
    res.status(200).send("Data Updated..");
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
}

async function createUser(req: Request, res: Response){
  try {
    res.status(200).send("User added....");
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
users.get("/", async (req: Request, res: Response) => {
  try {
    const api_response = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    });
    res.status(200).json(api_response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

users.get("/:isbn", async (req: Request, res: Response) => {
  try {
    const isbn: number = +req.params.isbn;
    const api_response = await axios({
      url: "https://jsonplaceholder.typicode.com/users/" + isbn,
      method: "get",
    });
    res.status(200).json(api_response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

users.delete("/:isbn", async (req: Request, res: Response) => {
  try {
    const isbn: number = +req.params.isbn;
    const api_response = await axios({
      url: "https://jsonplaceholder.typicode.com/users/" + isbn,
      method: "delete",
    });
    res.status(200).json(api_response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export { users };
