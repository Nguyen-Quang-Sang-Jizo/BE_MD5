import express from "express";
import userControllers from "../controllers/userControllers";
import {auth} from "../middleware/auth";
import {checkRole} from "../middleware/author";


const userRouter = express.Router();
userRouter.post('/register', userControllers.register);
userRouter.post('/login', userControllers.login);
userRouter.get('/:id', userControllers.findUser);
userRouter.put('/:id', userControllers.personalInformation);
userRouter.delete('/:id', userControllers.removeUser);
userRouter.delete('/account/:id', userControllers.deleteUsers);
userRouter.get('/', auth, userControllers.findUsers);
userRouter.get('/:username', userControllers.findIdUser);
userRouter.get('/search/:name', auth,userControllers.searchUsername);
export default userRouter;
