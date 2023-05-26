"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../models/Post");
const data_source_1 = require("../configs/data-source");
const typeorm_1 = require("typeorm");
class PostService {
    constructor() {
        this.getAll = async () => {
            let posts = await this.postRepository.find({
                relations: {
                    category: true,
                    author: true,
                    image: true
                }
            });
            return posts;
        };
        this.add = async (post) => {
            await this.postRepository.save(post);
        };
        this.deletePost = async (id) => {
            await this.postRepository.delete(id);
        };
        this.findByIdPost = async (id) => {
            let post = await this.postRepository.findOne({ where: { id: id },
                relations: {
                    author: true,
                }
            });
            return (post);
        };
        this.updatePost = async (id, newPost) => {
            await this.postRepository.update(id, newPost);
        };
        this.searchP = async (title) => {
            let posts = await this.postRepository.findBy({
                title: (0, typeorm_1.Like)(`%${title}%`)
            });
            return posts;
        };
        this.classifyPost = async (id) => {
            let comment = await this.postRepository.find({ where: { category: { id: id } },
                relations: {
                    category: true,
                    author: true
                }
            });
            return (comment);
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map