import {Router} from "express";
import likeControllers from "../controllers/likeController";
import {auth} from "../middleware/auth";

const likeRouter = Router();

likeRouter.get('/' , likeControllers.getAll);
likeRouter.post('/', auth, likeControllers.addLike)
likeRouter.delete('/post/:id', auth,likeControllers.deleteLike);
likeRouter.get('/:id', auth, likeControllers.detailLike);
export default likeRouter