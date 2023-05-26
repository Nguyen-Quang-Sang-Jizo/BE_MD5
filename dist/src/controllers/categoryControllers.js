"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            let listPost = await this.postService.getAll();
            res.render('index', { posts: listPost });
        };
        this.findAllCategory = async (req, res) => {
            let listCategory = await this.categoryService.getAll();
            res.status(200).json(listCategory);
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=categoryControllers.js.map