"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyDeleteOwnPost = exports.SECRET = void 0;
const jwt = require('jsonwebtoken');
exports.SECRET = '123456';
const postService_1 = __importDefault(require("../service/postService"));
const onlyDeleteOwnPost = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(accessToken, exports.SECRET);
    let id = req.params.id;
    const post = await postService_1.default.findByIdPost(id);
    if (!post) {
        return res.status(403).json({ message: 'Bạn không được phép xóa bài đăng này' });
    }
    if (post.author.id === decodedToken.idUser || decodedToken.role === 'admin') {
        return next();
    }
    if (post.author.id !== decodedToken.idUser) {
        return res.status(401).json({ message: 'Bạn không được phép xóa bài đăng này.' });
    }
};
exports.onlyDeleteOwnPost = onlyDeleteOwnPost;
//# sourceMappingURL=delete.js.map