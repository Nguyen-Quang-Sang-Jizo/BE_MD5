import {AppDataSource} from "../configs/data-source";
import {Image} from "../models/Image";
import {Comment} from "../models/Comment";
class ImageService{
    private imageRepository;
    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image)
    }
    addImage = async (postId, data) => {
        await data.forEach(item=>{
            this.imageRepository.save({post : postId ,imageURL:`${item}`})
        })
    }
    deleteOneImage = async (id) => {
        await this.imageRepository.delete(id)
    }
    deleteImageById = async (postId) => {
        await this.imageRepository
            .createQueryBuilder('Post')
            .delete()
            .where({ post: postId })
            .execute();
    }
    upDateImage = async (postId,data) => {
        console.log('update image')
        // await this.imageRepository.update({post : id}, data)
        await this.deleteImageById(postId);
        await this.addImage(postId,data)
    }

    // deleteImage = async (idHouse) => {
    //     await this.imageRepository
    //         .createQueryBuilder('users')
    //         .delete()
    //         .from(Image)
    //         .where({ house: idHouse })
    //         .execute()
    // }
    deleteAllImageByPostId = async (id) => {
        await this.imageRepository.createQueryBuilder()
            .delete()
            .from(Image)
            .where("post = :post", { post: id })
            .execute()
    }
}
export default new ImageService()