"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
const commentService_1 = __importDefault(require("../service/commentService"));
class CommentControllers {
    constructor() {
        this.addComments = async (req, res) => {
            const contents = req.body;
            const postId = req.params.id;
            const userId = req.user.id;
            try {
                const newComment = await commentService_1.default.addComment(contents, userId, postId);
                res.status(201).json(newComment);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to add comment' });
            }
        };
        this.showAll = async (req, res) => {
            let listComment = await this.commentService.getAllComment();
            res.status(200).json(listComment);
        };
        this.showComment = async (req, res) => {
            let id = req.params.id;
            let comment = await this.commentService.findByIdComments(id);
            res.status(200).json(comment);
        };
        this.removeComment = async (req, res) => {
            let id = req.params.id;
            await this.commentService.removeOneComment(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
        this.findIdComments = async (req, res) => {
            let id = req.params.id;
            let comment = await this.commentService.findByIdCommentss(id);
            res.status(200).json(comment);
        };
        this.editComment = async (req, res) => {
            let id = req.params.id;
            let commentEdit = req.body;
            await this.commentService.updateComment(id, commentEdit);
            res.status(200).json({
                message: "Edit success"
            });
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.commentService = commentService_1.default;
    }
}
exports.default = new CommentControllers();
//# sourceMappingURL=commentControllers.js.map