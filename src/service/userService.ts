import {User} from "../models/User";
import {Post} from "../models/Post";
import {AppDataSource} from "../configs/data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";
import {In, Like} from "typeorm";

class UserService{
    private userRepository;
    private postRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
        this.postRepository = AppDataSource.getRepository(Post);
    }

    getUser = async () => {
       let user = await this.userRepository.find();
       return user;
    }

    registers = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username});
        if(!userFind){
            return 'User is not exist'
        }else {
            let passWordCompare = await bcrypt.compare(user.password, userFind.password);
            if(passWordCompare){
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 1000
                })
            }else {
                return 'Password is wrong'
            }
        }
    }

    findByIdUser = async (username) => {
        let post = await this.userRepository.findOne({where: {username: username},
        })
        return(post);
    }

    deleteUser = async (id) => {
        const listPost = await this.postRepository.query(`SELECT * FROM Post WHERE authorId = ${id}`);
        if(listPost && listPost.length > 0) {
            await this.postRepository.delete(listPost);
        }
        await this.userRepository.delete(id);
    };

    updateUser = async (id, newUser) => {
        await this.userRepository.update(id, newUser)
    }

    findIdUsers = async (id) => {
        let post = await this.userRepository.findOne({where: {id: id},
        })
        return(post);
    }
    deleteAccount = async (id) => {
        await this.userRepository.delete(id);
    }

    adminSearchUsername = async (username) => {
        try {
            let searchPeople = await this.userRepository.find({
                where: {
                    username: Like(`${username}%`),
                    role: 'user'
                }
            });
            return searchPeople;
        } catch (error) {
            console.log(`Error ${error} on adminSearchUsername in adminUserService`);
            throw error;
        }
    }
    getFriend = async (userId) => {
        let friendships = await AppDataSource.createQueryBuilder()
            .select("friend")
            .from(Friend, "friend")
            .leftJoinAndSelect("friend.friend_One", "one")
            .leftJoinAndSelect("friend.friend_Two", "two")
            .where("friend.friend_One = :idOne", {idOne: userId})
            .orWhere("friend.friend_Two = :idTwo", {idTwo: userId})
            .getMany()
        let friends =  friendships.map(item => {
            if (item.friend_One.id == userId) {
                return item.friend_Two.id
            } else {
                return item.friend_One.id
            }
        })
        return await this.userRepository.find({
            where: {
                id: In(friends)
            }
        })
        // return await this.friendRepository.find({
        //     relations: {
        //         friend_Two: true,
        //         friend_One: true
        //     },
        //
        // })
    }
}

export default new UserService();