import {Like} from "../models/Like";
import {AppDataSource} from "../configs/data-source";
import {Comment} from "../models/Comment";

class LikeService{
    private likeRepository;
    constructor() {
        this.likeRepository = AppDataSource.getRepository(Like)
    }
    getAllLike = async () => {
        let likes = await this.likeRepository.find({
            relations:{
                user: true,
                post: true
            }
        });
        return likes;
    }
    addLikeByUser = async (data) => {
        await this.likeRepository.save(data);
    }
    findByIdLike = async (id) => {
        let like = await this.likeRepository.find({where: {id: id},
            relations:{
                post: true,
                user: true
            }
        })
        return like;
    }
    deleteLikeByUserId = async (userId, postId) => {
        console.log('----- dang o delete post')
        await this.likeRepository
            .createQueryBuilder()
            .delete()
            .from(Like)
            .where("user = :userId AND post = :postId", { userId: userId, postId: postId })
            .execute();
    }

    deleteAllByPostId = async (id) => {
        await this.likeRepository.createQueryBuilder()
            .delete()
            .from(Like)
            .where("post = :post", { post: id })
            .execute()
    }
}

export default new LikeService();