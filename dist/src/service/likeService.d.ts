declare class LikeService {
    private likeRepository;
    constructor();
    getAllLike: () => Promise<any>;
    addNewLike: (like: any) => Promise<void>;
    findByIdLike: (id: any) => Promise<any>;
    deleteLikeById: (id: any) => Promise<void>;
    deleteAllByPostId: (id: any) => Promise<void>;
}
declare const _default: LikeService;
export default _default;
