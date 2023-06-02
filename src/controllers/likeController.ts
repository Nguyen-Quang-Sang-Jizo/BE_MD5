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
        try{
        let listLike = await this.likeService.getAllLike()
        res.status(200).json(listLike)
    }catch(e){
        console.log("error in getAllLike:",e )
        res.status(400).json({
            message: 'error in getAllLike',
            success: false
        })
    }}
    addLike = async (req: Request, res: Response) => {
        try{
        let userId = parseInt(req["decode"].idUser)
        req.body.user = userId
        await this.likeService.addLikeByUser(req.body)
        res.status(201).json('them thanh cong')
    }catch(e){
        console.log("error in addLike:",e )
        res.status(400).json({
            message: 'error in addLike',
            success: false
        })
    }}

    deleteLike = async (req: Request, res: Response) => {
        try{
        let postId = req.params.id
        let userId = parseInt(req["decode"].idUser)
        console.log('-----UserId', userId)
        await this.likeService.deleteLikeByUserId(userId, postId)
        res.status(201).json('xoa thanh cong')
    }catch(e){
        console.log("error in deleteLike:",e )
        res.status(400).json({
            message: 'error in deleteLike',
            success: false
        })
    }}
    detailLike = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        const like = await this.likeService.findByIdLike(id);
        console.log(like)
        res.status(200).json(like)
    }catch(e){
        console.log("error in detailLike:",e )
        res.status(400).json({
            message: 'error in detailLike',
            success: false
        })
    }}

    countLike = async (req: Request, res: Response) => {
        try{
            // let id = req.params.id
            let count = await this.postService.getCountLike()
            res.status(200).json(count)
        }catch(e){
            console.log("error in getAllLike:",e )
            res.status(400).json({
                message: 'error in getAllLike',
                success: false
            })
        }}
}

export default new LikeController();