import express from "express";
import userControllers from "../controllers/userControllers";
import {auth} from "../middleware/auth";
import {checkRole} from "../middleware/author";


const userRouter = express.Router();

userRouter.get('/', userControllers.findUsers)
userRouter.get('/',userControllers.getMany)
userRouter.post('/register', userControllers.register);
userRouter.post('/login', userControllers.login);
userRouter.get('/:username', userControllers.findIdUser);
userRouter.get('/update/:id', userControllers.findUser);
userRouter.delete('/:id', userControllers.removeUser);
userRouter.delete('/account/:id', userControllers.deleteUsers);
userRouter.put('/:id', userControllers.personalInformation);
userRouter.get('/search/:name', auth, checkRole, userControllers.searchUsername);

export default userRouter;
