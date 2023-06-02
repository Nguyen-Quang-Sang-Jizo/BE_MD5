"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const Post_1 = require("../models/Post");
const data_source_1 = require("../configs/data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const typeorm_1 = require("typeorm");
const Friend_1 = require("../models/Friend");
class UserService {
    constructor() {
        this.getUser = async () => {
            let user = await this.userRepository.find();
            return user;
        };
        this.registers = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOneBy({ username: user.username });
            if (!userFind) {
                return 'User is not exist';
            }
            else {
                let passWordCompare = await bcrypt_1.default.compare(user.password, userFind.password);
                if (passWordCompare) {
                    let payload = {
                        idUser: userFind.id,
                        username: userFind.username,
                        role: userFind.role,
                    };
                    let token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000 * 1000
                    });
                    payload['token'] = token;
                    return payload;
                }
                else {
                    return 'Password is wrong';
                }
            }
        };
        this.findByIdUser = async (username) => {
            let post = await this.userRepository.findOne({ where: { username: username },
            });
            return (post);
        };
        this.deleteUser = async (id) => {
            const listPost = await this.postRepository.query(`SELECT * FROM Post WHERE authorId = ${id}`);
            if (listPost && listPost.length > 0) {
                await this.postRepository.delete(listPost);
            }
            await this.userRepository.delete(id);
        };
        this.updateUser = async (id, newUser) => {
            await this.userRepository.update(id, newUser);
        };
        this.findIdUsers = async (id) => {
            let post = await this.userRepository.findOne({ where: { id: id },
            });
            return post;
        };
        this.deleteAccount = async (id) => {
            await this.userRepository.delete(id);
        };
        this.adminSearchUsername = async (username) => {
            try {
                let searchPeople = await this.userRepository.find({
                    where: {
                        username: (0, typeorm_1.Like)(`${username}%`),
                        role: 'user'
                    }
                });
                return searchPeople;
            }
            catch (error) {
                console.log(`Error ${error} on adminSearchUsername in adminUserService`);
                throw error;
            }
        };
        this.getFriend = async (userId) => {
            let friendships = await data_source_1.AppDataSource.createQueryBuilder()
                .select("friend")
                .from(Friend_1.Friend, "friend")
                .leftJoinAndSelect("friend.friend_One", "one")
                .leftJoinAndSelect("friend.friend_Two", "two")
                .where("friend.friend_One = :idOne", { idOne: userId })
                .orWhere("friend.friend_Two = :idTwo", { idTwo: userId })
                .getMany();
            console.log("friendships:", friendships);
            let friends = friendships.map(item => {
                if (item.friend_One.id == userId) {
                    return item.friend_Two.id;
                }
                else {
                    return item.friend_One.id;
                }
            });
            return await this.userRepository.find({
                where: {
                    id: (0, typeorm_1.In)(friends)
                }
            });
        };
        this.addFriend = async (data) => {
            return (await this.friendRepository.save(data));
        };
        this.showAllPending = async () => {
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
        this.friendRepository = data_source_1.AppDataSource.getRepository(Friend_1.Friend);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map