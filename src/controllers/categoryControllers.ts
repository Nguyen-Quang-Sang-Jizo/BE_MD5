import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";

class PostController{
    private postService;
    private categoryService;

    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
    }
    findAll = async (req: Request, res: Response) => {
        let listPost = await this.postService.getAll();
        res.render('index',{posts: listPost})
    }
    findAllCategory = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAll();
        res.status(200).json(listCategory);
    }

}
export default new PostController();