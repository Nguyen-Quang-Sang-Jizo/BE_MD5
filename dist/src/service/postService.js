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
                    image: true,
                    comments: true
                }
            });
            return posts;
        };
        this.getAllByIdUser = async () => {
            return await this.postRepository.find({
                where: { author: true },
                relations: {
                    category: true,
                    author: true,
                    image: true,
                    comments: true
                }
            });
        };
        this.addPostByUser = async (post, author) => {
            let newPost = {
                title: post.title,
                content: post.content,
                status: post.status,
                date_created: post.date_created,
                date_updated: post.date_updated,
                category: post.category,
                author: author,
            };
            return (await this.postRepository.save(newPost));
        };
        this.deletePost = async (id) => {
            await this.postRepository.delete(id);
        };
        this.findByIdPost = async (id) => {
            let post = await this.postRepository.findOne({ where: { id: id },
                relations: {
                    author: true,
                    category: true,
                    image: true
                }
            });
            return (post);
        };
        this.findLastPost = async () => {
            console.log(1);
            const firstItem = await this.postRepository.find();
            console.log(firstItem);
            return firstItem;
        };
        this.updatePost = async (id, post) => {
            console.log('da vao pót');
            let newPost = await this.postRepository.createQueryBuilder()
                .update(Post_1.Post)
                .set({
                title: post.title,
                content: post.content,
                status: post.status,
            })
                .where("id = :id", { id: id })
                .execute();
            console.log(newPost);
        };
        this.searchP = async (title) => {
            let posts = await this.postRepository.findBy({
                title: (0, typeorm_1.Like)(`%${title}%`),
                order: {
                    date_updated: 'DESC'
                }
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