import {Request, Response} from "express";
import userService from "../service/userService";


class UserControllers{
    private userService;
    constructor() {
        this.userService = userService;
    }

    findUsers = async (req: Request, res: Response) => {
        let listUsers = await this.userService.getUser();
        res.status(200).json(listUsers);
    }
    getMany = async (req: Request, res: Response) => {
        console.log("get friends with user Id:", req['decode'].idUser)
        let listFriend = await this.userService.getFriend(req['decode'].idUser);
        res.status(200).json(listFriend);
    }

    register = async (req: Request, res: Response) => {
        let listUser = await this.userService.getUser();
        let list = listUser.map(function (acc){
            return acc.username
        })
        let account = list.toString()
        if(account.includes(req.body.username)){
            res.status(401).json('tai khoan nay da ton tai')
        }else {
            await this.userService.registers(req.body);
            res.status(201).json('Create user success')
        }
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await this.userService.checkUser(req.body);

        res.status(200).json(resultCheck);
    }
    personalInformation = async (req:Request, res: Response) => {
        let id = req.params.id;
        let userEdit = req.body;
        await this.userService.updateUser(id, userEdit)
        res.status(200).json({
            message: "success"
        })
    }

    findUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let user = await this.userService.findIdUsers(id);
        res.status(200).json(user)
    }


    findIdUser = async (req: Request, res: Response) => {
        let username = req.params.username;
        let user = await this.userService.findByIdUser(username);
        res.status(200).json(user)
    }

    removeUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.userService.deleteUser(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }

    deleteUsers = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.userService.deleteAccount(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }

    searchUsername = async (req: Request, res: Response) => {
        let username = req.params.name;
        let user = await this.userService.adminSearchUsername(username);
        res.status(200).json(user);
    }


}

export default new UserControllers();