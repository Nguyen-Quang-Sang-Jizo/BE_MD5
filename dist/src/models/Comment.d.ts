import { User } from "./User";
import { Post } from "./Post";
export declare class Comment {
    id: number;
    contents: string;
    date_created: Date;
    user: User;
    post: Post;
}
