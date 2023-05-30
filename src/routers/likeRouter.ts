import {Router} from "express";
import likeControllers from "../controllers/likeController";
import {auth} from "../middleware/auth";

const likeRouter = Router();

likeRouter.get('/' , likeControllers.getAll);
likeRouter.post('/', likeControllers.addLike)
likeRouter.get('/:id', auth, likeControllers.detailLike);
likeRouter.delete('/:id', auth, likeControllers.deleteLike);

export default likeRouter