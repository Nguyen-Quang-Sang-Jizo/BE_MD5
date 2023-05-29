import userRouter from "./userRouter";
import postRouter from "./postRouter";
import categoryRouter from "./categoryRouter";
import commentRouter from "./commentRouter";

const router = (app) => {
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/categories', categoryRouter);
    app.use('/comments', commentRouter);
    // app.use('/friend',friendsRouter)
};
export default router;