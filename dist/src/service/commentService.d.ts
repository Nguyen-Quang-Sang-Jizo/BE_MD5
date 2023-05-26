declare class CommentService {
    private commentRepository;
    constructor();
    getAllComment: () => Promise<any>;
    addComment: (comment: any) => Promise<void>;
    findByIdComments: (id: any) => Promise<any>;
    deleteComment: (id: any) => Promise<void>;
    findByIdCommentss: (id: any) => Promise<any>;
    updateComment: (id: any, newComment: any) => Promise<void>;
}
declare const _default: CommentService;
export default _default;
