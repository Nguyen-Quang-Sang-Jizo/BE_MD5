"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserControllers {
    constructor() {
        this.findUsers = async (req, res) => {
            let listUsers = await this.userService.getUser();
            res.status(200).json(listUsers);
        };
        this.register = async (req, res) => {
            let listUser = await this.userService.getUser();
            let list = listUser.map(function (acc) {
                return acc.username;
            });
            let account = list.toString();
            if (account.includes(req.body.username)) {
                res.status(401).json('tai khoan nay da ton tai');
            }
            else {
                await this.userService.registers(req.body);
                res.status(201).json('Create user success');
            }
        };
        this.login = async (req, res) => {
            let resultCheck = await this.userService.checkUser(req.body);
            res.status(200).json(resultCheck);
        };
        this.personalInformation = async (req, res) => {
            let id = req.params.id;
            let userEdit = req.body;
            await this.userService.updateUser(id, userEdit);
            res.status(200).json({
                message: "success"
            });
        };
        this.findUser = async (req, res) => {
            let id = req.params.id;
            let user = await this.userService.findIdUsers(id);
            res.status(200).json(user);
        };
        this.findIdUser = async (req, res) => {
            let username = req.params.username;
            let user = await this.userService.findByIdUser(username);
            res.status(200).json(user);
        };
        this.removeUser = async (req, res) => {
            let id = req.params.id;
            await this.userService.deleteUser(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
        this.deleteUsers = async (req, res) => {
            let id = req.params.id;
            await this.userService.deleteAccount(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
        this.searchUsername = async (req, res) => {
            let username = req.params.name;
            let user = await this.userService.adminSearchUsername(username);
            res.status(200).json(user);
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserControllers();
//# sourceMappingURL=user.controllers.js.map