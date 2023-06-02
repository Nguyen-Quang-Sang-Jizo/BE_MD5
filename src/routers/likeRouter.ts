import {Router} from "express";
import likeControllers from "../controllers/likeController";
import {auth} from "../middleware/auth";

const likeRouter = Router();

likeRouter.get('/' , likeControllers.getAll);
likeRouter.post('/', auth, likeControllers.addLike)
likeRouter.delete('/post/:id', auth,likeControllers.deleteLike);
likeRouter.get('/:id', auth, likeControllers.detailLike);
likeRouter.get('/count/:id', auth, (req, res, next) => {
    likeControllers.countLike(req,res)
});
export default likeRouter