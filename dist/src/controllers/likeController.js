"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
const likeService_1 = __importDefault(require("../service/likeService"));
class LikeController {
    constructor() {
        this.getAll = async (req, res) => {
            let listLike = await this.likeService.getAllLike();
            res.status(200).json(listLike);
        };
        this.addLike = async (req, res) => {
            let like = await this.likeService.addNewLike();
            res.status(200).json(like);
        };
        this.detailLike = async (req, res) => {
            let id = req.params.id;
            const like = await this.likeService.findByIdLike(id);
            console.log(like);
            res.status(200).json(like);
        };
        this.deleteLike = async (req, res) => {
            let id = req.params.id;
            await this.likeService.deleteLikeById(id);
            res.status(200).json('xoa thanh cong');
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.likeService = likeService_1.default;
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map