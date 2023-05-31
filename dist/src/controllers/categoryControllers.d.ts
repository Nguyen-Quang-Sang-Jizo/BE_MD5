import { Request, Response } from "express";
declare class PostController {
    private categoryService;
    constructor();
    findAllCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
