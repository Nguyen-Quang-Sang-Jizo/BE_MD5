import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";
import likeService from "../service/likeService";
import commentService from "../service/commentService";

class LikeController {
    private postService;
    private categoryService;
    private likeService;
    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
        this.likeService = likeService;
    }

    getAll = async (req: Request, res: Response) => {
        let listLike = await this.likeService.getAllLike()
        res.status(200).json(listLike)
    }
    addLike = async (req: Request, res: Response) => {
        let like = await this.likeService.addNewLike()
        res.status(200).json(like)
    }
    detailLike = async (req: Request, res: Response) => {
        let id = req.params.id;
        const like = await this.likeService.findByIdLike(id);
        console.log(like)
        res.status(200).json(like)
    }
    deleteLike = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.likeService.deleteLikeById(id)
        res.status(200).json('xoa thanh cong')
    }
}

export default new LikeController();