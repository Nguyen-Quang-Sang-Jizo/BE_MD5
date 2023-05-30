import {Router} from "express";
import commentControllers from "../controllers/commentControllers";
import {deleteComment} from "../middleware/deleteComment";
import {auth} from "../middleware/auth";


const commentRouter = Router();
commentRouter.get('/', commentControllers.showAll)
commentRouter.post('/', auth,commentControllers.createComment)
commentRouter.get('/:id' ,commentControllers.showComment);
commentRouter.delete('/:id' , commentControllers.removeComment);
commentRouter.get('/find/:id' , commentControllers.findIdComments);
commentRouter.put('/:id' ,commentControllers.editComment);
export default commentRouter;