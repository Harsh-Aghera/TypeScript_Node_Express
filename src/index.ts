import express, {Express} from "express";
import { router } from './routes/routes'
import {middleware} from './controller/middleware'
const PORT: number = 5000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware);
app.use('/books',router)
app.listen(PORT, () => console.log("Server is running"));