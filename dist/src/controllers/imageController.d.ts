import { Request, Response } from "express";
declare class ImageController {
    private imageService;
    constructor();
    deleteImage: (req: Request, res: Response) => Promise<void>;
    deleteOne: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ImageController;
export default _default;
