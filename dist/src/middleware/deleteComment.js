"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.SECRET = void 0;
const jwt = require('jsonwebtoken');
exports.SECRET = '123456';
const commentService_1 = __importDefault(require("../service/commentService"));
const deleteComment = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(accessToken, exports.SECRET);
    let id = req.params.id;
    const comment = await commentService_1.default.findByIdComments(id);
    console.log(comment);
    if (!comment) {
        return res.status(403).json({ message: 'Bạn không được phép xóa bình luận  này' });
    }
    if (comment.authors.id === decodedToken.idUser || decodedToken.role === 'admin') {
        return next();
    }
    if (comment.authors.id !== decodedToken.idUser) {
        return res.status(401).json({ message: 'Bạn không được phép xóa bình luận này.' });
    }
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=deleteComment.js.map