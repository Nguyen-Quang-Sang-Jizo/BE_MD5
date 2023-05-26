import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;

    @Column({type: 'varchar'})
    public username: string;

    @Column({type: 'varchar'})
    public password: string;

    @Column({type: 'text'})
    public image: string;

    @Column({ default: 'user', type: 'varchar' })
    public role: string;

    @OneToMany(() => Post, post => post.author)
    posts: Post[];
    comments: any;
}