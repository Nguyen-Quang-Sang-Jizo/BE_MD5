import {Comment} from "../models/Comment";
import {AppDataSource} from "../configs/data-source";
import postController from "../controllers/postController";
import { create } from "domain";

class CommentService{
    private commentRepository;
    constructor() {
        this.commentRepository = AppDataSource.getRepository(Comment)
    }
    getAllComment = async () => {
        let comments = await this.commentRepository.find({
            relations : {
                user: true,
                post: true
            }
        });
        return comments;
    }
      addComment= (contents, userId, postId) => {
          const comment = {
            contents,
            userId,
            postId,
          };
      
          const newComment =  this.commentRepository.save(comment);
      
          return newComment;
        }
      
     
    
      
      
    // dùng để xóa comment , dùng cho cả admin và user
        showDetailComments = async (id) => {
        let comment = await this.commentRepository.find(
            {where: {post: {id: id}},
            relations:{
                post: true,
                user: true
            }
        })
        return(comment);
    }
    removeOneComment = async (id) => {
        await this.commentRepository.delete({
            where: {post: id}
        })
    }

    deleteComment = async (id) => {
        // await this.commentRepository.delete({
        //     where: {post: id}
        // })

        await this.commentRepository.createQueryBuilder()
            .delete()
            .from(Comment)
            .where("post = :post", { post: id })
            .execute()
    }

    findByIdComments = async (id) => {
        return await this.commentRepository.findOne({
            relations: {
                user: true,
                post: true
            },
            where: {post: {id: id}}
        })
    }

    updateComment = async (id, newComment) => {
        await this.commentRepository.update(id, newComment)
    }

}

export default new CommentService();