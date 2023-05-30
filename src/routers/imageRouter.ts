import {Router} from "express";
import ImageController from "../controllers/imageController";

const imageRouter = Router();

imageRouter.delete('/:id', ImageController.deleteOne);

export default imageRouter