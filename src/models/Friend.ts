import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Friend {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: "enum",
        default: 0,
        enum: [0, 1, 2]
    })
    status;
    @ManyToOne(() => User)
    friend_One: User;

    @ManyToOne(() => User)
    friend_Two: User;
}