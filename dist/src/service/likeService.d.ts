declare class LikeService {
    private likeRepository;
    constructor();
    getAllLike: () => Promise<any>;
    addLikeByUser: (data: any) => Promise<void>;
    findByIdLike: (id: any) => Promise<any>;
    deleteLikeByUserId: (userId: any, postId: any) => Promise<void>;
    deleteAllByPostId: (id: any) => Promise<void>;
    findCountLikeByIdPost(idPost: any): Promise<any>;
}
declare const _default: LikeService;
export default _default;
