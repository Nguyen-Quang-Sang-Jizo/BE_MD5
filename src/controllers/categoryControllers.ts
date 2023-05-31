import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";

class PostController{
    private categoryService;

    constructor() {
        this.categoryService = categoryService;
    }
    findAllCategory = async (req: Request, res: Response) => {
        try {
            let listCategory = await this.categoryService.getAll();
            res.status(200).json({
                data: listCategory,
                success: true
            });
        } catch (e) {
            console.log("error in find all category", e)
            res.status(500).json({
                message: 'get all category failed',
                success: false
            })
        }

    }

}
export default new PostController();