import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable, ManyToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    imageURL: string;

    @ManyToOne(() => Post, post => post.image)
    post: Post;
}
