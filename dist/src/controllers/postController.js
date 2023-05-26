"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
const userService_1 = __importDefault(require("../service/userService"));
class PostControllers {
    constructor() {
        this.findAll = async (req, res) => {
            let listPost = await this.postService.getAll();
            res.status(200).json(listPost);
        };
        this.addPost = async (req, res) => {
            await this.postService.add(req.body);
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
        };
        this.editPost = async (req, res) => {
            let id = req.params.id;
            let postEdit = req.body;
            await this.postService.updatePost(id, postEdit);
            res.status(200).json({
                message: "Edit success"
            });
        };
        this.removePost = async (req, res) => {
            let id = req.params.id;
            await this.postService.deletePost(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
        this.findId = async (req, res) => {
            let id = req.params.id;
            let post = await this.postService.findByIdPost(id);
            res.status(200).json(post);
        };
        this.postSearch = async (req, res) => {
            let titleSearch = req.params.name;
            let post = await this.postService.searchP(titleSearch);
            res.status(200).json(post);
        };
        this.postClassify = async (req, res) => {
            let id = req.params.id;
            let category = await this.postService.classifyPost(id);
            res.status(200).json(category);
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.userService = userService_1.default;
    }
}
exports.default = new PostControllers();
//# sourceMappingURL=postController.js.map