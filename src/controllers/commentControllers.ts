import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";
import commentService from "../service/commentService"

class CommentControllers{
    private postService;
    private categoryService;
    private commentService;
    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
        this.commentService = commentService;
    }
    addComments = async (req: Request, res: Response) => {

        if(!req.body.contents){
            res.status(400).json({
                message: 'content missing'
            })
            res.end();
        }else {
            await this.commentService.addComment(req.body)
            res.status(201).json({
                message: 'OK'
            })
        }
    }
    showAll = async (req: Request, res: Response) => {
        let listComment = await this.commentService.getAllComment()
        res.status(200).json(listComment)
    }
    showComment = async (req: Request, res: Response) => {
        let id = req.params.id;
       let comment = await this.commentService.findByIdComments(id)
        res.status(200).json(comment)
    }

    removeComment = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.commentService.removeOneComment(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }
    findIdComments = async (req: Request, res: Response) => {
        let id = req.params.id;
        let comment = await this.commentService.findByIdCommentss(id);
        res.status(200).json(comment)
    }

    editComment = async (req: Request, res: Response) => {
        let id = req.params.id;
        let commentEdit = req.body;
        await this.commentService.updateComment(id, commentEdit)
        res.status(200).json({
            message: "Edit success"
        })
    }
}

export default new CommentControllers();