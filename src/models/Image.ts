import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable, ManyToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Image {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'text'})
    public image: string;

    @ManyToOne(() => Post, post => post.image)
    post: Post;
}
