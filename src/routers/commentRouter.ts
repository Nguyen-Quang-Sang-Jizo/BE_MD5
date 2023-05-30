import {Router} from "express";
import commentControllers from "../controllers/commentControllers";
import {deleteComment} from "../middleware/deleteComment";


const commentRouter = Router();
commentRouter.get('/', commentControllers.showAll)
commentRouter.post('/:postId' , commentControllers.addComments);
commentRouter.get('/:id' ,commentControllers.showComment);
commentRouter.delete('/:id' , commentControllers.removeComment);
commentRouter.get('/find/:id' , commentControllers.findIdComments);
commentRouter.put('/:id' ,commentControllers.editComment);

export default commentRouter;