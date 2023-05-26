import userRouter from "./userRouter";
import postRouter from "./postRouter";
import categoryRouter from "./categoryRouter";
import commentRouter from "./commentRouter";

const router = (app) => {
    app.use('/auth', userRouter);
    app.use('/post', postRouter);
    app.use('/category', categoryRouter);
    app.use('/comment', commentRouter);
};

export default router;