import { Request, Response } from "express";
declare class LikeController {
    private postService;
    private categoryService;
    private likeService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    addLike: (req: Request, res: Response) => Promise<void>;
    deleteLike: (req: Request, res: Response) => Promise<void>;
    detailLike: (req: Request, res: Response) => Promise<void>;
    countLike(req: Request, res: Response): Promise<void>;
}
declare const _default: LikeController;
export default _default;
