import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";
import likeService from "../service/likeService";

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
        let userId = parseInt(req["decode"].idUser)
        req.body.user = userId
        await this.likeService.addLikeByUser(req.body)
        res.status(201).json('them thanh cong')
    }

    deleteLike = async (req: Request, res: Response) => {
        let postId = req.params.id
        let userId = parseInt(req["decode"].idUser)
        console.log('-----UserId', userId)
        await this.likeService.deleteLikeByUserId(userId, postId)
        res.status(201).json('xoa thanh cong')
    }
    detailLike = async (req: Request, res: Response) => {
        let id = req.params.id;
        const like = await this.likeService.findByIdLike(id);
        console.log(like)
        res.status(200).json(like)
    }
}

export default new LikeController();