import { Router } from "express";
import postControllers from "../controllers/postController";
import { auth } from "../middleware/auth";
import { checkRole } from "../middleware/author";
import { privatePost } from "../middleware/private";
import { onlyDeleteOwnPost } from "../middleware/delete";

const postRouter = Router();
postRouter.get('/', privatePost, postControllers.findAll);
postRouter.post('/',auth, postControllers.addPost);
postRouter.get('/my-list', auth, postControllers.findAllById);
postRouter.put('/:id', auth,onlyDeleteOwnPost, postControllers.editPost);
postRouter.delete('/:id', auth,onlyDeleteOwnPost, postControllers.removePost);
postRouter.get('/admin/:id', onlyDeleteOwnPost, postControllers.findId);
postRouter.get('/search/:title' ,postControllers.postSearch);
postRouter.get('/classify/:id' ,postControllers.postClassify);

export default postRouter;