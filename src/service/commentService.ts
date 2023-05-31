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
<<<<<<< HEAD
      addComment= (contents, userId, postId) => {
          const comment = {
            contents,
            userId,
            postId,
          };
      
          const newComment =  this.commentRepository.save(comment);
      
          return newComment;
        }
      
     
    
      
      
=======
    addComment = async (comment, user, postId) =>{
        console.log('dang o add comment')
        let newComment = {
            contents : comment.contents,
            date_created: comment.date_created,
            user : user,
            post : {
                where: {id : postId}
            }
        }
        return (await this.commentRepository.save(newComment));
    }
    addCommentByUser = async (data) => {
        console.log('-----dang o addComment')
        // let comment = await this.commentRepository
        //     .createQueryBuilder()
        //     .insert()
        //     .into(Comment)
        //     .values({
        //         contents: data.contents,
        //         date_created: data.date_created,
        //         user: userID,
        //         post: data.postId
        //     })
        //     .execute()
        // console.log('----- new comment',comment)
        return await this.commentRepository.save(data)
    }

>>>>>>> 7f3037b9730a2ab51aa30d6312abe6106500e224
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
        await this.commentRepository.delete(id)
    }

    deleteComment = async (id) => {
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