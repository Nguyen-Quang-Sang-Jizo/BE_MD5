import { User } from "./User";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Comment } from "./Comment";
import { Image } from "./Image";
export declare class Post {
    id: number;
    title: string;
    content: string;
    status: string;
    date_created: Date;
    date_updated: Date;
    author: User;
    category: Category;
    tags: Tag[];
    comments: Comment[];
    image: Image[];
}
