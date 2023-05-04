
import express, {Express, Request, Response, NextFunction} from "express";
import { users } from './users.controller'
const PORT: number = 5000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',users);
app.use((req: Request, res: Response, next: NextFunction) => {
    res.send("check URL please")
})
app.listen(PORT, () => console.log("Server is running"));