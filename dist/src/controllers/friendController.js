"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class FriendController {
    constructor() {
        this.getMany = async (req, res) => {
            try {
                console.log("get friends with user Id:", req['decode'].idUser);
                let listFriend = await this.userService.getFriend(req['decode'].idUser);
                console.log(listFriend);
                res.status(200).json(listFriend);
            }
            catch (e) {
                console.log("error in getMany:", e);
                res.status(400).json({
                    message: 'error in getMany',
                    success: false
                });
            }
        };
        this.newFriend = async (req, res) => {
            try {
                console.log(req.body);
                let data = req.body;
                let friend = await this.userService.addFriend(data);
                res.status(200).json(friend);
            }
            catch (e) {
                console.log("error in newFriend:", e);
                res.status(400).json({
                    message: 'can not add friend',
                    success: false
                });
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new FriendController();
//# sourceMappingURL=friendController.js.map