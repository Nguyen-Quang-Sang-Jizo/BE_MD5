declare class CommentService {
    private commentRepository;
    constructor();
    getAllComment: () => Promise<any>;
    addComment: (contents: any, userId: any, postId: any) => any;
    showDetailComments: (id: any) => Promise<any>;
    removeOneComment: (id: any) => Promise<void>;
    deleteComment: (id: any) => Promise<void>;
    findByIdComments: (id: any) => Promise<any>;
    updateComment: (id: any, newComment: any) => Promise<void>;
}
declare const _default: CommentService;
export default _default;
