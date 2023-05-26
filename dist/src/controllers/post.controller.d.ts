import { Request, Response } from "express";
declare class PostControllers {
    private postService;
    private categoryService;
    private userService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addPost: (req: Request, res: Response) => Promise<void>;
    editPost: (req: Request, res: Response) => Promise<void>;
    removePost: (req: Request, res: Response) => Promise<void>;
    findId: (req: Request, res: Response) => Promise<void>;
    postSearch: (req: Request, res: Response) => Promise<void>;
    postClassify: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostControllers;
export default _default;
