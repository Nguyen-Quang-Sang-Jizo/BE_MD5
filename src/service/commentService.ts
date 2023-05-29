import {Comment} from "../models/Comment";
import {AppDataSource} from "../configs/data-source";

class CommentService{
    private commentRepository;
    constructor() {
        this.commentRepository = AppDataSource.getRepository(Comment)
    }
    getAllComment = async () => {
        let comments = await this.commentRepository.find();
        return comments;
    }
    addComment = async (comment) =>{
        await this.commentRepository.save(comment);
    }

    findByIdComments = async (id) => {
        let comment = await this.commentRepository.find({where: {post: {id: id}},
            relations:{
                post: true,
                user: true
            }
        })
        return(comment);
    }

    deleteComment = async (id) => {
        await this.commentRepository.delete(id);
    }

    findByIdCommentss = async (id) => {
        return(await this.commentRepository.findOne({where: {id: id}}));
    }

    updateComment = async (id, newComment) => {
        await this.commentRepository.update(id, newComment)
    }




}

export default new CommentService();