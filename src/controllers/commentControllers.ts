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
<<<<<<< HEAD
    addComments= async (req, res) => {
        const  contents = req.body;
        const  postId  = req.params.id; 
        const userId = req.user.id;
        
        try {
          const newComment = await  commentService.addComment(contents, userId, postId);
    
          res.status(201).json(newComment);
        } catch (error) {
          res.status(500).json({ error: 'Failed to add comment' });
        }
      }
    
=======
    createComment = async (req: Request, res: Response) => {
        try{
        let userId = parseInt(req["decode"].idUser)
        console.log('-----UserId', userId)
        req.body.user = userId
        await this.commentService.addCommentByUser(req.body)
        res.status(201).json('them thanh cong')
    }catch(e){
        console.log("error in createComment:",e )
        res.status(400).json({
            message: 'error in createComment',
            success: false
        })
    }
    }
>>>>>>> 7f3037b9730a2ab51aa30d6312abe6106500e224
    showAll = async (req: Request, res: Response) => {
        try{
        let listComment = await this.commentService.getAllComment()
        res.status(200).json(listComment)
    }catch(e){
        console.log("error in showAll:",e )
        res.status(400).json({
            message: 'error in showAll',
            success: false
        })
    }
    }
    showComment = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
       let comment = await this.commentService.findByIdComments(id)
        res.status(200).json(comment)
    }catch(e){
        console.log("error in showComment:",e )
        res.status(400).json({
            message: 'error in showComment',
            success: false
        })
    }
    }

    removeComment = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        await this.commentService.removeOneComment(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }catch(e){
        console.log("error in removeComment:",e )
        res.status(400).json({
            message: 'error in removeComment',
            success: false
        })
    }
    }
    findIdComments = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        let comment = await this.commentService.findByIdCommentss(id);
        res.status(200).json(comment)
    }catch(e){
        console.log("error in findIdComment:",e )
        res.status(400).json({
            message: 'error in findIdComment',
            success: false
        })
    }
    }

    editComment = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        let commentEdit = req.body;
        await this.commentService.updateComment(id, commentEdit)
        res.status(200).json({
            message: "Edit success"
        })
    }catch(e){
        console.log("error in editComment:",e )
        res.status(400).json({
            message: 'error in editComment',
            success: false
        })
    }
    }
}

export default new CommentControllers();