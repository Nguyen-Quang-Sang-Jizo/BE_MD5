import userRouter from "./userRouter";
import postRouter from "./postRouter";
import categoryRouter from "./categoryRouter";
import commentRouter from "./commentRouter";
import likeRouter from "./likeRouter";
import imageRouter from "./imageRouter";

const router = (app) => {
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/categories', categoryRouter);
    app.use('/comments', commentRouter);
    app.use('/likes', likeRouter)
    app.use('/images', imageRouter)
    // app.use('/friend',friendsRouter)
};
export default router;
