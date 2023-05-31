import {Request, Response} from "express";
import userService from "../service/userService";


class UserControllers{
    private userService;
    constructor() {
        this.userService = userService;
    }

    findUsers = async (req: Request, res: Response) => {
        try {
            let listUsers = await this.userService.getUser();
            res.status(200).json(listUsers);
        }catch (e){
            console.log("error in findUsers:",e )
            res.status(400).json({
                message: 'error in findUsers',
                success: false
            })
        }

    }
    getMany = async (req: Request, res: Response) => {
        try{
        console.log("get friends with user Id:", req['decode'].idUser)
        let listFriend = await this.userService.getFriend(req['decode'].idUser);
        console.log(listFriend)
        res.status(200).json(listFriend);
        }catch(e){
            console.log("error in getMany:",e )
            res.status(400).json({
                message: 'error in getMany',
                success: false
            })
        }

    }

    register = async (req: Request, res: Response) => {
        try{
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
        }catch(e){
            console.log("error in register:",e )
            res.status(400).json({
                message: 'error in register',
                success: false
            })
     }
    }



    login = async (req: Request, res: Response) => {
        try{
            let resultCheck = await this.userService.checkUser(req.body);
            res.status(200).json(resultCheck);
        }
        catch (e){
            console.log('error in signup')
            res.status(400).json({
                message: 'error in signup',
                success: false
            })
        }

    }
    personalInformation = async (req:Request, res: Response) => {
        try{
        let id = req.params.id;
        let userEdit = req.body;
        await this.userService.updateUser(id, userEdit)
        res.status(200).json({
            message: "success"
        })
    }catch(e){
        console.log("error in personalInformation:",e )
        res.status(400).json({
            message: 'error in personalInformation',
            success: false
        })
    }
    }

    findUser = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        let user = await this.userService.findIdUsers(id);
        res.status(200).json(user)
        }catch(e){
            console.log("error in findUser:",e )
            res.status(400).json({
                message: 'error in findUser',
                success: false
            })
        }
    }


    findIdUser = async (req: Request, res: Response) => {
        try{
        let username = req.params.username;
        let user = await this.userService.findByIdUser(username);
        res.status(200).json(user)
        }catch(e){
            console.log("error in findIdUser:",e )
            res.status(400).json({
                message: 'error in findIdUser',
                success: false
            })
        }
    }

    removeUser = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        await this.userService.deleteUser(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }catch(e){
        console.log("error in removeUser:",e )
        res.status(400).json({
            message: 'error in removeUser',
            success: false
        })
    }
    }

    deleteUsers = async (req: Request, res: Response) => {
        try{
        let id = req.params.id;
        await this.userService.deleteAccount(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }catch(e){
        console.log("error in deleteUsers:",e )
        res.status(400).json({
            message: 'error in deleteUsers',
            success: false
        })
    }
    }

    searchUsername = async (req: Request, res: Response) => {
        try{
        let username = req.params.name;
        let user = await this.userService.adminSearchUsername(username);
        res.status(200).json(user);
    }catch(e){
        console.log("error in searchUsername:",e )
        res.status(400).json({
            message: 'error in searchUsername',
            success: false
        })
    }
    }


}

export default new UserControllers();