"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../configs/data-source");
const Image_1 = require("../models/Image");
class ImageService {
    constructor() {
        this.addImage = async (id, data) => {
            console.log(data);
            await data.forEach(item => {
                this.imageRepository.save({ post: id, imageURL: `${item}` });
            });
        };
        this.imageRepository = data_source_1.AppDataSource.getRepository(Image_1.Image);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map