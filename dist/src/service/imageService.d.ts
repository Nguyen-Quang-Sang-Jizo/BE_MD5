declare class ImageService {
    private imageRepository;
    constructor();
    addImage: (id: any, data: any) => Promise<void>;
}
declare const _default: ImageService;
export default _default;
