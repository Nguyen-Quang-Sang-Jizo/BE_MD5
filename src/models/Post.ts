import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable, ManyToMany} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Comment } from "./Comment";
import { Image } from "./Image";
import {Likes} from "./Like";

@Entity()
export class Post {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    content: string;

    @Column({ default: 'public', type: 'varchar' })
    public status: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    public date_created: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    public date_updated: Date;

    @ManyToOne(() => User, user => user.posts)
    public author: User;

    @ManyToOne(() => Category, category => category.posts)
    public category: Category;

    @ManyToMany(() => Tag)
    @JoinTable()
    public tags: Tag[];

    @OneToMany(() => Comment, comment => comment.post)
    public comments: Comment[];
    @OneToMany(() => Image, image => image.post)
    public image: Image[];
    @OneToMany(() => Likes, like => like.post)
    public like: Likes[];
}
