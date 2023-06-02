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
        this.addComment = async (comment, user, postId) => {
            console.log('dang o add comment');
            let newComment = {
                contents: comment.contents,
                date_created: comment.date_created,
                user: user,
                post: {
                    where: { id: postId }
                }
            };
            return (await this.commentRepository.save(newComment));
        };
        this.addCommentByUser = async (data) => {
            console.log('-----dang o addComment');
            return await this.commentRepository.save(data);
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
            await this.commentRepository.delete(id);
        };
        this.deleteComment = async (id) => {
            await this.commentRepository.createQueryBuilder()
                .delete()
                .from(Comment_1.Comment)
                .where("post = :post", { post: id })
                .execute();
        };
        this.findCommentByIdPost = async (id) => {
            return await this.commentRepository.find({
                relations: {
                    post: {
                        id: true
                    },
                    user: true
                },
                where: { post: { id: id } },
                order: { date_created: 'ASC' },
                select: {
                    user: {
                        image: true,
                        password: false
                    }
                }
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