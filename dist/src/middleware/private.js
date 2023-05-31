"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privatePost = void 0;
const postService_1 = __importDefault(require("../service/postService"));
const privatePost = async (req, res) => {
    let listPosts = await postService_1.default.getAll();
    const publicPosts = listPosts.filter(post => post.status === 'public');
    const privatePosts = listPosts.filter(post => post.status === 'private');
    const idUserLogin = req.decode.idUser;
    const privates = privatePosts.filter(post => post.author.id === idUserLogin);
    const data = [...publicPosts, ...privates];
    console.log(data);
    if (req.decode.role === 'admin') {
        return res.json(listPosts);
    }
    else {
        return res.json(data);
    }
};
exports.privatePost = privatePost;
//# sourceMappingURL=private.js.map