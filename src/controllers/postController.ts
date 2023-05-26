import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";
import userService from "../service/userService";


class PostControllers{
    private postService;
    private categoryService;
    private userService

    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
        this.userService = userService;
    }

    findAll = async (req: Request, res: Response) => {
        let listPost = await this.postService.getAll();
            res.status(200).json(listPost);
    }

    addPost = async (req: Request, res: Response) => {
        await this.postService.add(req.body);
        if(!req.body.title){
            res.status(400).json({
                message: 'title missing'
            })
            res.end();
        }else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    editPost = async (req: Request, res: Response) => {
        let id = req.params.id;
        let postEdit = req.body;
        await this.postService.updatePost(id, postEdit)
        res.status(200).json({
            message: "Edit success"
        })
    }


    removePost = async (req: Request, res: Response) => {
        let id = req.params.id;
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