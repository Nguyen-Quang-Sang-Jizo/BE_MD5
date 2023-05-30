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
        this.addNewLike = async (like) => {
            await this.likeRepository.save(like);
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
        this.deleteLikeById = async (id) => {
            await this.likeRepository.delete(id);
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