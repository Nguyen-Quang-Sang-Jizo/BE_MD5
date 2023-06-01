import { Request, Response } from "express";
declare class UserControllers {
    private userService;
    constructor();
    findUsers: (req: Request, res: Response) => Promise<void>;
    getMany: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    personalInformation: (req: Request, res: Response) => Promise<void>;
    findUser: (req: Request, res: Response) => Promise<void>;
    findIdUser: (req: Request, res: Response) => Promise<void>;
    removeUser: (req: Request, res: Response) => Promise<void>;
    deleteUsers: (req: Request, res: Response) => Promise<void>;
    searchUsername: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserControllers;
export default _default;
