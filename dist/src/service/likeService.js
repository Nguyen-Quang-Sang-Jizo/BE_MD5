"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Like_1 = require("../models/Like");
const data_source_1 = require("../configs/data-source");
class LikeService {
    constructor() {
        this.getAllLike = async () => {
            let likes = await this.likeRepository.find({
                relations: {
                    user: true,
                    post: true
                }
            });
            return likes;
        };
        this.addLikeByUser = async (data) => {
            await this.likeRepository.save(data);
        };
        this.findByIdLike = async (id) => {
            let like = await this.likeRepository.find({ where: { id: id },
                relations: {
                    post: true,
                    user: true
                }
            });
            return like;
        };
        this.deleteLikeByUserId = async (userId, postId) => {
            console.log('----- dang o delete post');
            await this.likeRepository
                .createQueryBuilder()
                .delete()
                .from(Like_1.Like)
                .where("user = :userId AND post = :postId", { userId: userId, postId: postId })
                .execute();
        };
        this.deleteAllByPostId = async (id) => {
            await this.likeRepository.createQueryBuilder()
                .delete()
                .from(Like_1.Like)
                .where("post = :post", { post: id })
                .execute();
        };
        this.likeRepository = data_source_1.AppDataSource.getRepository(Like_1.Like);
    }
}
exports.default = new LikeService();
//# sourceMappingURL=likeService.js.map