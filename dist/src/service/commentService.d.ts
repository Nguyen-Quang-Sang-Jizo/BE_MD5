declare class CommentService {
    private commentRepository;
    constructor();
    getAllComment: () => Promise<any>;
    addComment: (comment: any, user: any, postId: any) => Promise<any>;
    addCommentByUser: (data: any) => Promise<any>;
    showDetailComments: (id: any) => Promise<any>;
    removeOneComment: (id: any) => Promise<void>;
    deleteComment: (id: any) => Promise<void>;
    findCommentByIdPost: (id: any) => Promise<any>;
    updateComment: (id: any, newComment: any) => Promise<void>;
}
declare const _default: CommentService;
export default _default;
