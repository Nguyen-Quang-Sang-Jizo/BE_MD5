"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../configs/data-source");
const Image_1 = require("../models/Image");
class ImageService {
    constructor() {
        this.addImage = async (postId, data) => {
            await data.forEach(item => {
                this.imageRepository.save({ post: postId, imageURL: `${item}` });
            });
        };
        this.deleteOneImage = async (id) => {
            await this.imageRepository.delete(id);
        };
        this.deleteImageById = async (postId) => {
            await this.imageRepository
                .createQueryBuilder('Post')
                .delete()
                .where({ post: postId })
                .execute();
        };
        this.upDateImage = async (postId, data) => {
            console.log('update image');
            await this.deleteImageById(postId);
            await this.addImage(postId, data);
        };
        this.deleteAllImageByPostId = async (id) => {
            await this.imageRepository.createQueryBuilder()
                .delete()
                .from(Image_1.Image)
                .where("post = :post", { post: id })
                .execute();
        };
        this.imageRepository = data_source_1.AppDataSource.getRepository(Image_1.Image);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map