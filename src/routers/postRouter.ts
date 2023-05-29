import { Router } from "express";
import postControllers from "../controllers/postController";
import { auth } from "../middleware/auth";
import { checkRole } from "../middleware/author";
import { privatePost } from "../middleware/private";
import { onlyDeleteOwnPost } from "../middleware/delete";

const postRouter = Router();

// postRouter.use(auth,);
postRouter.get('/', privatePost, postControllers.findAll);
postRouter.post('/',auth, postControllers.addPost);
postRouter.put('/:id', onlyDeleteOwnPost, postControllers.editPost);
postRouter.delete('/:id', onlyDeleteOwnPost, postControllers.removePost);
postRouter.get('/:id', onlyDeleteOwnPost, postControllers.findId);
postRouter.get('/search/:name' ,postControllers.postSearch);
postRouter.get('/classify/:id' ,postControllers.postClassify);

export default postRouter;