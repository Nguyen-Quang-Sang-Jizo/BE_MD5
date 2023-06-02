declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any>;
    getAllByIdUser: () => Promise<any>;
    addPostByUser: (post: any, author: any) => Promise<any>;
    deletePost: (id: any) => Promise<void>;
    findByIdPost: (id: any) => Promise<any>;
    findLastPost: () => Promise<any>;
    updatePost: (id: any, post: any) => Promise<void>;
    searchP: (title: any) => Promise<any>;
    classifyPost: (id: any) => Promise<any>;
    getCountLike: () => Promise<number>;
}
declare const _default: PostService;
export default _default;
