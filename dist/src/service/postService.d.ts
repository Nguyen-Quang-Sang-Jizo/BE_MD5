declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (post: any) => Promise<void>;
    deletePost: (id: any) => Promise<void>;
    findByIdPost: (id: any) => Promise<any>;
    updatePost: (id: any, newPost: any) => Promise<void>;
    searchP: (title: any) => Promise<any>;
    classifyPost: (id: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;
