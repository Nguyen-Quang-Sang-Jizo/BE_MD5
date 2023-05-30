import imageService from "../service/imageService";
import {Request, Response} from "express";

class ImageController {
    private imageService
    constructor() {
        this.imageService = imageService
    }

    deleteImage = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.imageService.deleteImageById(id)
        res.status(200).json('xoa thanh cong')
    }

    deleteOne = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.imageService.deleteOneImage(id)
        res.status(200).json('xoa thanh cong')
    }
}

export default new ImageController();