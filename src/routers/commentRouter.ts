import {Router} from "express";
import commentControllers from "../controllers/commentControllers";
import {deleteComment} from "../middleware/deleteComment";
import {auth} from "../middleware/auth";


const commentRouter = Router();
commentRouter.get('/', commentControllers.showAll)
<<<<<<< HEAD
commentRouter.post('/:postId' , commentControllers.addComments);
=======
commentRouter.post('/', auth,commentControllers.createComment)
>>>>>>> 7f3037b9730a2ab51aa30d6312abe6106500e224
commentRouter.get('/:id' ,commentControllers.showComment);
commentRouter.delete('/:id' , commentControllers.removeComment);
commentRouter.get('/find/:id' , commentControllers.findIdComments);
commentRouter.put('/:id' ,commentControllers.editComment);
export default commentRouter;