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
        this.createComment = async (req, res) => {
            try {
                let userId = parseInt(req["decode"].idUser);
                console.log('-----UserId', userId);
                req.body.user = userId;
                await this.commentService.addCommentByUser(req.body);
                res.status(201).json('them thanh cong');
            }
            catch (e) {
                console.log("error in createComment:", e);
                res.status(400).json({
                    message: 'error in createComment',
                    success: false
                });
            }
        };
        this.showAll = async (req, res) => {
            try {
                let listComment = await this.commentService.getAllComment();
                res.status(200).json(listComment);
            }
            catch (e) {
                console.log("error in showAll:", e);
                res.status(400).json({
                    message: 'error in showAll',
                    success: false
                });
            }
        };
        this.showComment = async (req, res) => {
            try {
                let id = req.params.id;
                let comment = await this.commentService.findByIdComments(id);
                res.status(200).json(comment);
            }
            catch (e) {
                console.log("error in showComment:", e);
                res.status(400).json({
                    message: 'error in showComment',
                    success: false
                });
            }
        };
        this.removeComment = async (req, res) => {
            try {
                let id = req.params.id;
                await this.commentService.removeOneComment(id);
                res.status(200).json({
                    message: 'Delete success'
                });
            }
            catch (e) {
                console.log("error in removeComment:", e);
                res.status(400).json({
                    message: 'error in removeComment',
                    success: false
                });
            }
        };
        this.findIdComments = async (req, res) => {
            try {
                let id = req.params.id;
                let comment = await this.commentService.findByIdCommentss(id);
                res.status(200).json(comment);
            }
            catch (e) {
                console.log("error in findIdComment:", e);
                res.status(400).json({
                    message: 'error in findIdComment',
                    success: false
                });
            }
        };
        this.editComment = async (req, res) => {
            try {
                let id = req.params.id;
                let commentEdit = req.body;
                await this.commentService.updateComment(id, commentEdit);
                res.status(200).json({
                    message: "Edit success"
                });
            }
            catch (e) {
                console.log("error in editComment:", e);
                res.status(400).json({
                    message: 'error in editComment',
                    success: false
                });
            }
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
        this.commentService = commentService_1.default;
    }
}
exports.default = new CommentControllers();
//# sourceMappingURL=commentControllers.js.map