import {Comment} from "../models/Comment";
import {AppDataSource} from "../configs/data-source";
import postController from "../controllers/postController";

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

    findCommentByIdPost = async (id) => {
        return await this.commentRepository.find({
            relations: {
                post: {
                    id: true
                },
                user: true
            },
            where: {post: {id: id}},
            order: {date_created: 'ASC'},
            select: {
                user: {
                    image: true,
                    password: false
                }
            }
        })
    }

    updateComment = async (id, newComment) => {
        await this.commentRepository.update(id, newComment)
    }

}

export default new CommentService();