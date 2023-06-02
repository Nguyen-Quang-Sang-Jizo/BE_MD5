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
        console.log(292929229)
        try{
            let listPosts = await postService.getAll();
            const publicPosts = listPosts.filter(post => post.status === 'public');
            const privatePosts = listPosts.filter(post => post.status === 'private');
            const idUserLogin = req["decode"].idUser

            const privates = privatePosts.filter(post => post.author.id === idUserLogin);
            const data = [...publicPosts,...privates];
            if ( req["decode"].role === 'admin') {
                return res.json(listPosts);
            } else {
                return res.json(data);
            }
        }catch (e){
            console.log('errr', e)
        }

    }



    findAllById = async (req: Request, res: Response) => {
        try {
            let listPost = await this.postService.getAllByIdUser();
            res.status(200).json({
                data: listPost,
                success: true
            });
        } catch (e) {
            console.log("error in post controller", e)
            res.status(500).json({
                message: 'get list post failed',
                success: false
            })
        }
    }
    addPost = async (req: Request, res: Response) => {
        const author = req["decode"].idUser
        let post = req.body
        let imageData = post.image;
        let lastPost = await this.postService.addPostByUser(post, author);
        try {
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
        } catch (e) {
            console.log("error add post", e)
            res.status(500).json({
                message: 'post failed',
                success: false
            })
        }
    }

    editPost = async (req: Request, res: Response) => {
        let postId = req.params.id;
        let postEdit = req.body;
        console.log(postEdit)
        let imageData = postEdit.image
        console.log(imageData)
        try {
            await this.imageService.upDateImage(postId,imageData)
            await this.postService.updatePost(postId, postEdit)
            res.status(200).json({
                message: "Edit success"
            })
        } catch (e) {
            console.log("error edit post", e)
            res.status(500).json({
                message: 'edit post failed',
                success: false
            })
        }

    }

    removePost = async (req: Request, res: Response) => {
        let id = req.params.id;
        try {
            await this.commentService.deleteComment(id)
            await this.likeService.deleteAllByPostId(id)
            await this.imageService.deleteAllImageByPostId(id)
            await this.postService.deletePost(id);
            res.status(200).json({
                message: 'Delete success'
            })
        } catch (e) {
            console.log("error edit post", e)
            res.status(500).json({
                message: 'remove post failed',
                success: false
            })
        }

    }


    findId = async (req: Request, res: Response) => {
        let id = req.params.id;
        try {
            let post = await this.postService.findByIdPost(id);
            res.status(200).json({
                data: post,
                success: true
            })
        } catch (e) {
            console.log("error find id in post controller", e)
            res.status(500).json({
                message: 'id not found',
                success: false
            })
        }

    }
    postSearch = async (req: Request, res: Response) => {
        let titleSearch = req.params.name
        try {
            let post = await this.postService.searchP(titleSearch)
            res.status(200).json({
                data: post,
                success: true
            })
        } catch (e) {
            console.log("error search post by name", e)
            res.status(500).json({
                message: 'name not found',
                success: false
            })
        }

    }

    postClassify = async (req: Request, res: Response) => {
        let id = req.params.id;
        try {
            let category = await this.postService.classifyPost(id)
            res.status(200).json({
                data: category,
                success: true
            })
        } catch (e) {
            console.log("error postClassify", e)
            res.status(500).json({
                message: 'can not found',
                success: false
            })
        }

    }
}

export default new PostControllers();