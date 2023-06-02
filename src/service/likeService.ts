import {Likes} from "../models/Like";
import {AppDataSource} from "../configs/data-source";

class LikeService{
    private likeRepository;
    constructor() {
        this.likeRepository = AppDataSource.getRepository(Likes)
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
            .from(Likes)
            .where("user = :userId AND post = :postId", { userId: userId, postId: postId })
            .execute();
    }

    deleteAllByPostId = async (id) => {
        await this.likeRepository.createQueryBuilder()
            .delete()
            .from(Likes)
            .where("post = :post", { post: id })
            .execute()
    }

    async findCountLikeByIdPost (idPost) {
        return await this.likeRepository.find({
            where: {
                post: {
                    id: idPost // post một object, chứa các trường của post, khi manytoone sẽ là 1 đối tượng, onetomany sẽ là một mảng
                },
                status: true
            },
            relations: {
                user: true
            }
        });
    }
}

export default new LikeService();