import { Request, Response } from "express";
declare class FriendController {
    private userService;
    constructor();
    getMany: (req: Request, res: Response) => Promise<void>;
    newFriend: (req: Request, res: Response) => Promise<void>;
}
declare const _default: FriendController;
export default _default;
