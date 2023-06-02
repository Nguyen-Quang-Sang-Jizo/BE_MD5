import {Post} from "../models/Post";
import {AppDataSource} from "../configs/data-source";
import {Like} from "typeorm";
import {Likes} from "../models/Like";

class PostService{
    private postRepository;
    private likeRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
        this.likeRepository = AppDataSource.getRepository(Likes)
    }

    getAll = async () => {
        let posts = await this.postRepository.find({
            relations:{
                category: true,
                author: true,
                image: true,
                like: true,
                comments: {
                    user: true
                }
            },
            select: {
                comments: {
                    user: {
                        image: true,
                        username : true,
                        password: false
                    },
                    contents: true
                },
                author: {
                    id:true,
                    image: true,
                    username : true,
                    password: false
                }
            }
        });
        return posts;
    }
    getAllByIdUser = async () => {
        return await this.postRepository.find({
            where: {author: true},
            relations: {
                category: true,
                author: true,
                image: true,
                comments: true
            }
        })
    }
    addPostByUser = async (post, author) => {
        //
        let newPost = {
            title: post.title,
            content: post.content,
            status: post.status,
            date_created: post.date_created,
            date_updated: post.date_updated,
            category: post.category,
            author: author,
        }
        return (await this.postRepository.save(newPost));
    }

    deletePost = async (id) => {
        await this.postRepository.delete(id);
    }

    findByIdPost = async (id) => {
        let post = await this.postRepository.findOne({
            where: {id: id},
            relations: {
                author: true,
                category: true,
                image: true
            }
        })
        return (post);
    }

    findLastPost = async () => {
        console.log(1)
        const firstItem = await this.postRepository.find()
        // .take(1) // Giới hạn kết quả trả về chỉ 1 phần tử
        // .getOne();

        console.log(firstItem)
        return firstItem
    }
    updatePost = async (id, post) => {
        console.log('da vao pót')
        // await this.postRepository.update(id, post)
        let newPost = await this.postRepository.createQueryBuilder()
            .update(Post)
            .set({
                title: post.title,
                content: post.content,
                status: post.status,
            })
            .where("id = :id", {id: id})
            .execute()
        console.log(newPost)
        // return newPost

    }

    searchP = async (title) => {
        let posts = await this.postRepository.findBy({
            title: Like(`%${title}%`),
            order: {
                date_updated: 'DESC'
            }
        });
        return posts;
    }

    classifyPost = async (id) => {
        let comment = await this.postRepository.find({
            where: {category: {id: id}},
            relations: {
                category: true,
                author: true

            }
        })
        return (comment);
    }
    getCountLike = async () => {
        const posts = await this.postRepository.find(Post)
        for (const post of posts) {
            const likesCount = await AppDataSource
                .getRepository(Likes)
                .createQueryBuilder('likes')
                .where('likes.post = :postId', {postId: post.id})
                .andWhere('likes.status = true')
                .getCount();

            console.log(`Post ${post.id} has ${likesCount} likes.`);
            return likesCount
        }
    }
}


export default new PostService();