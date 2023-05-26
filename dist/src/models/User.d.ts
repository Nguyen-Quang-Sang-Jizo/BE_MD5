import { Post } from "./Post";
export declare class User {
    id: number;
    username: string;
    password: string;
    image: string;
    role: string;
    posts: Post[];
    comments: any;
}
