import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tags: string;

    @Column()
    surname: string;

    @Column()
    completeName: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToMany(() => Post, (post) => post.author, { cascade: true})
    posts: Post[]
}