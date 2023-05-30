declare class ImageService {
    private imageRepository;
    constructor();
    addImage: (postId: any, data: any) => Promise<void>;
    deleteOneImage: (id: any) => Promise<void>;
    deleteImageById: (postId: any) => Promise<void>;
    upDateImage: (postId: any, data: any) => Promise<void>;
    deleteAllImageByPostId: (id: any) => Promise<void>;
}
declare const _default: ImageService;
export default _default;
