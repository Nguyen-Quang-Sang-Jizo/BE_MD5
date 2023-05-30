import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";
import userService from "../service/userService";
import ImageService from "../service/imageService";
import likeService from "../service/likeService";
import commentService from "../service/commentService";
import imageService from "../service/imageService";


class PostControllers {
    private postService;
    private categoryService;
    private userService;
    private likeService;
    private commentService;
    private imageService;

    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.likeService = likeService;
        this.commentService = commentService;
        this.imageService = imageService
    }

    findAll = async (req: Request, res: Response) => {
        let listPost = await this.postService.getAll();
        res.status(200).json(listPost);
    }
    addPost = async (req: Request, res: Response) => {
        const author = req["decode"].idUser
        let post = req.body
        let imageData = post.image;
        let lastPost = await this.postService.addPostByUser(post, author);
        await ImageService.addImage(lastPost.id, imageData)
        if (!req.body.title) {
            res.status(400).json({
                message: 'title missing'
            })
            res.end();
        } else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    editPost = async (req: Request, res: Response) => {
        let postId = req.params.id;
        let postEdit = req.body;
        console.log(postEdit)
        let imageData = postEdit.image
        console.log(imageData)
        await this.imageService.upDateImage(postId,imageData)
        await this.postService.updatePost(postId, postEdit)
        res.status(200).json({
            message: "Edit success"
        })
    }


    removePost = async (req: Request, res: Response) => {
        let id = req.params.id;
        console.log(id)
        // await this.likeService.deleteLikeById(id)
        await this.commentService.deleteComment(id)
        await this.likeService.deleteAllByPostId(id)
        await this.imageService.deleteAllImageByPostId(id)
        // await this.commentService.removeAllComment(id)
        await this.postService.deletePost(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }


    findId = async (req: Request, res: Response) => {
        let id = req.params.id;
        let post = await this.postService.findByIdPost(id);
        res.status(200).json(post)
    }
    postSearch = async (req: Request, res: Response) => {
        let titleSearch = req.params.name
        let post = await this.postService.searchP(titleSearch)
        res.status(200).json(post)
    }

    postClassify = async (req: Request, res: Response) => {
        let id = req.params.id;
        let category = await this.postService.classifyPost(id)
        res.status(200).json(category)
    }
}

export default new PostControllers();