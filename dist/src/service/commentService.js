"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_1 = require("../models/Comment");
const data_source_1 = require("../configs/data-source");
class CommentService {
    constructor() {
        this.getAllComment = async () => {
            let comments = await this.commentRepository.find({
                relations: {
                    user: true,
                    post: true
                }
            });
            return comments;
        };
        this.addComment = (contents, userId, postId) => {
            const comment = {
                contents,
                userId,
                postId,
            };
            const newComment = this.commentRepository.save(comment);
            return newComment;
        };
        this.showDetailComments = async (id) => {
            let comment = await this.commentRepository.find({ where: { post: { id: id } },
                relations: {
                    post: true,
                    user: true
                }
            });
            return (comment);
        };
        this.removeOneComment = async (id) => {
            await this.commentRepository.delete({
                where: { post: id }
            });
        };
        this.deleteComment = async (id) => {
            await this.commentRepository.createQueryBuilder()
                .delete()
                .from(Comment_1.Comment)
                .where("post = :post", { post: id })
                .execute();
        };
        this.findByIdComments = async (id) => {
            return await this.commentRepository.findOne({
                relations: {
                    user: true,
                    post: true
                },
                where: { post: { id: id } }
            });
        };
        this.updateComment = async (id, newComment) => {
            await this.commentRepository.update(id, newComment);
        };
        this.commentRepository = data_source_1.AppDataSource.getRepository(Comment_1.Comment);
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map