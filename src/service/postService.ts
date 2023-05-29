import {Post} from "../models/Post";
import {AppDataSource} from "../configs/data-source";
import {Like} from "typeorm";

class PostService{
    private postRepository;
    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }

    getAll = async () => {
        let posts = await this.postRepository.find({
            relations:{
                category: true,
                author: true,
                image: true
            }
        });
        return posts;
    }

    addByUser = async (post) =>{
        await this.postRepository.save(post);
    }

    deletePost = async (id) => {
        await this.postRepository.delete(id);
    }

    findByIdPost = async (id) => {
        let post = await this.postRepository.findOne({where: {id: id},
            relations:{
                author: true,
            }
        })
        return(post);
    }

    updatePost = async (id, newPost) => {
        await this.postRepository.update(id, newPost)
    }

    searchP = async (title) => {
        let posts = await this.postRepository.findBy({
            title: Like(`%${title}%`)
        });
        return posts;
    }

    classifyPost = async (id) => {
        let comment = await this.postRepository.find({where: {category: {id: id}},
            relations:{
                category: true,
                author: true

            }
        })
        return(comment);
    }



}

export default new PostService();