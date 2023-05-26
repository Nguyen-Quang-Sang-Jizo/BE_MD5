import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    contents: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date_created: Date;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;
}
