import {Request, Response} from "express";
import userService from "../service/userService";

class FriendController {
    private userService
    constructor() {
        this.userService = userService
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

    newFriend = async (req: Request, res: Response) => {
        try{
            console.log(req.body)
            let data = req.body;
            let friend = await this.userService.addFriend(data)
            res.status(200).json(friend);
        }catch(e){
            console.log("error in newFriend:",e )
            res.status(400).json({
                message: 'can not add friend',
                success: false
            })
        }}

}

export default new FriendController();