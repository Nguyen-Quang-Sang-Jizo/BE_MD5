import { Request, Response } from "express";
declare class CommentControllers {
    private postService;
    private categoryService;
    private commentService;
    constructor();
    createComment: (req: Request, res: Response) => Promise<void>;
    showAll: (req: Request, res: Response) => Promise<void>;
    showCommentById: (req: Request, res: Response) => Promise<void>;
    removeComment: (req: Request, res: Response) => Promise<void>;
    editComment: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CommentControllers;
export default _default;
