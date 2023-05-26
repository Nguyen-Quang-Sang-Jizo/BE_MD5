"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = require("../models/Comment");
const data_source_1 = require("../configs/data-source");
class CommentService {
    constructor() {
        this.getAllComment = async () => {
            let comments = await this.commentRepository.find();
            return comments;
        };
        this.addComment = async (comment) => {
            await this.commentRepository.save(comment);
        };
        this.findByIdComments = async (id) => {
            let comment = await this.commentRepository.find({ where: { post: { id: id } },
                relations: {
                    post: true,
                    authors: true
                }
            });
            return (comment);
        };
        this.deleteComment = async (id) => {
            await this.commentRepository.delete(id);
        };
        this.findByIdCommentss = async (id) => {
            return (await this.commentRepository.findOne({ where: { id: id } }));
        };
        this.updateComment = async (id, newComment) => {
            await this.commentRepository.update(id, newComment);
        };
        this.commentRepository = data_source_1.AppDataSource.getRepository(Comment_1.Comment);
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map