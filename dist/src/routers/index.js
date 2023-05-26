"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = __importDefault(require("./userRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const router = (app) => {
    app.use('/auth', userRouter_1.default);
    app.use('/post', postRouter_1.default);
    app.use('/category', categoryRouter_1.default);
    app.use('/comment', commentRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map