"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privatePost = exports.SECRET = void 0;
const jwt = require('jsonwebtoken');
exports.SECRET = '123456';
const postService_1 = __importDefault(require("../service/postService"));
const privatePost = async (req, res, next) => {
    let accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(accessToken, exports.SECRET);
    let listPosts = await postService_1.default.getAll();
    const publicPosts = listPosts.filter(post => post.status === 'public');
    const privatePosts = listPosts.filter(post => post.status === 'private');
    const idUserLogin = decodedToken.idUser;
    const privates = privatePosts.filter(post => post.author.id === idUserLogin);
    const data = publicPosts.concat(privates);
    const list = data || publicPosts;
    if (decodedToken.role === 'admin') {
        return res.json(listPosts);
    }
    else {
        return res.json(list);
    }
};
exports.privatePost = privatePost;
//# sourceMappingURL=private.js.map