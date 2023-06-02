import {Router} from "express";
import {auth} from "../middleware/auth";
import friendController from "../controllers/friendController";

const friendRouter = Router();
friendRouter.get('/', auth, friendController.getMany)
friendRouter.post('/', auth, friendController.newFriend)



export default friendRouter