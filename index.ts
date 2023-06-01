import express, {Request, Response} from "express";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import { connectDB } from "./src/configs/data-source";
import router from "./src/routers";
import * as dotenv from "dotenv";
import cors from "cors"
import * as process from "process";

const PORT = 3001;
const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(process.env.USER_CODE_SECRET))
connectDB();
app.use(cors());
router(app);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
});
