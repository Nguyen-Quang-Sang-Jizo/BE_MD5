import { Request, Response } from "express";
declare class PostController {
    private postService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    findAllCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
