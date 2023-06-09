"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
const userService_1 = __importDefault(require("../service/userService"));
const imageService_1 = __importDefault(require("../service/imageService"));
const likeService_1 = __importDefault(require("../service/likeService"));
const commentService_1 = __importDefault(require("../service/commentService"));
const imageService_2 = __importDefault(require("../service/imageService"));
class PostControllers {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                let listPosts = await postService_1.default.getAll();
                const publicPosts = listPosts.filter(post => post.status === 'public');
                const privatePosts = listPosts.filter(post => post.status === 'private');
                const idUserLogin = req["decode"].idUser;
                const privates = privatePosts.filter(post => post.author.id === idUserLogin);
                const data = [...publicPosts, ...privates];
                if (req["decode"].role === 'admin') {
                    return res.json(listPosts);
                }
                else {
                    return res.json(data);
                }
            }
            catch (e) {
                console.log("error in post controller", e);
                res.status(500).json({
                    message: 'get list post failed',
                    success: false
                });
            }
        };
        this.findAllById = async (req, res) => {
            try {
                let listPost = await this.postService.getAllByIdUser();
                res.status(200).json({
                    data: listPost,
                    success: true
                });
            }
            catch (e) {
                console.log("error in post controller", e);
                res.status(500).json({
                    message: 'get list post failed',
                    success: false
                });
            }
        };
        this.addPost = async (req, res) => {
            const author = req["decode"].idUser;
            let post = req.body;
            let imageData = post.image;
            let lastPost = await this.postService.addPostByUser(post, author);
            try {
                await imageService_1.default.addImage(lastPost.id, imageData);
                if (!req.body.title) {
                    res.status(400).json({
                        message: 'title missing'
                    });
                    res.end();
                }
                else {
                    res.status(201).json({
                        message: 'OK'
                    });
                }
            }
            catch (e) {
                console.log("error add post", e);
                res.status(500).json({
                    message: 'post failed',
                    success: false
                });
            }
        };
        this.editPost = async (req, res) => {
            let postId = req.params.id;
            let postEdit = req.body;
            console.log(postEdit);
            let imageData = postEdit.image;
            console.log(imageData);
            try {
                await this.imageService.upDateImage(postId, imageData);
                await this.postService.updatePost(postId, postEdit);
                res.status(200).json({
                    message: "Edit success"
                });
            }
            catch (e) {
                console.log("error edit post", e);
                res.status(500).json({
                    message: 'edit post failed',
                    success: false
                });
            }
        };
        this.removePost = async (req, res) => {
            let id = req.params.id;
            try {
                await this.commentService.deleteComment(id);
                await this.likeService.deleteAllByPostId(id);
                await this.imageService.deleteAllImageByPostId(id);
                await this.postService.deletePost(id);
                res.status(200).json({
                    message: 'Delete success'
                });
            }
            catch (e) {
                console.log("error edit post", e);
                res.status(500).json({
                    message: 'remove post failed',
                    success: false
                });
            }
        };
        this.findId = async (req, res) => {
            let id = req.params.id;
            try {
                let post = await this.postService.findByIdPost(id);
                res.status(200).json({
                    data: post,
                    success: true
                });
            }
            catch (e) {
                console.log("error find id in post controller", e);
                res.status(500).json({
                    message: 'id not found',
                    success: false
                });
            }
        };
        this.postSearch = async (req, res) => {
            let titleSearch = req.params.name;
            try {
                let post = await this.postService.searchP(titleSearch);
                res.status(200).json({
                    data: post,
                    success: true
                });
            }
            catch (e) {
                console.log("error search post by name", e);
                res.status(500).json({
                    message: 'name not found',
                    success: false
                });
            }
        };
        this.postClassify = async (req, res) => {
            let id = req.params.id;
            try {
                let category = await this.postService.classifyPost(id);
                res.status(200).json({
                    data: category,
                    success: true
                });
            }
            catch (e) {
                console.log("error postClassify", e);
                res.status(500).json({
                    message: 'can not found',
                    success: false
                });
            }
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.userService = userService_1.default;
        this.likeService = likeService_1.default;
        this.commentService = commentService_1.default;
        this.imageService = imageService_2.default;
    }
}
exports.default = new PostControllers();
//# sourceMappingURL=postController.js.map