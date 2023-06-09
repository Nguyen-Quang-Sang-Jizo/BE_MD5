"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const likeRouter_1 = __importDefault(require("./likeRouter"));
const imageRouter_1 = __importDefault(require("./imageRouter"));
const friendRouter_1 = __importDefault(require("./friendRouter"));
const router = (app) => {
    app.use('/users', userRouter_1.default);
    app.use('/posts', postRouter_1.default);
    app.use('/categories', categoryRouter_1.default);
    app.use('/comments', commentRouter_1.default);
    app.use('/likes', likeRouter_1.default);
    app.use('/images', imageRouter_1.default);
    app.use('/friends', friendRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map