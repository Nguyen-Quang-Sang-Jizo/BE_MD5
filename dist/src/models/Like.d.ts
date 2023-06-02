import { Post } from './Post';
import { User } from './User';
export declare class Like {
    id: number;
    post: Post;
    user: User;
    status: boolean;
    created_at: Date;
}
