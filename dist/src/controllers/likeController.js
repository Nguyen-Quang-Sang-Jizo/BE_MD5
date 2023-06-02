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
            let userId = parseInt(req["decode"].idUser);
            req.body.user = userId;
            await this.likeService.addLikeByUser(req.body);
            res.status(201).json('them thanh cong');
        };
        this.deleteLike = async (req, res) => {
            let postId = req.params.id;
            let userId = parseInt(req["decode"].idUser);
            console.log('-----UserId', userId);
            await this.likeService.deleteLikeByUserId(userId, postId);
            res.status(201).json('xoa thanh cong');
        };
        this.detailLike = async (req, res) => {
            let id = req.params.id;
            const like = await this.likeService.findByIdLike(id);
            console.log(like);
            res.status(200).json(like);
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.likeService = likeService_1.default;
    }
    async countLike(req, res) {
        try {
            let id = req.params.id;
            let count = await this.likeService.findCountLikeByIdPost(id);
            res.status(200).json(count);
        }
        catch (e) {
            console.log("error in getAllLike:", e);
            res.status(400).json({
                message: 'error in countLike',
                success: false
            });
        }
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map