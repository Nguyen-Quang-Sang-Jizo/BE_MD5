import {Router} from "express";
import categoryControllers from "../controllers/categoryControllers";

const categoryRouter = Router();

categoryRouter.get('/' , categoryControllers.findAllCategory);

export default categoryRouter;