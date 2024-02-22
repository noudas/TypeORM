import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Post } from "./Post"
import { Comment } from "./Comment"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    age: number

    @OneToMany(() => Post, (post) => post.user, { cascade: true})
    posts: Post[]

    @OneToMany(() => Comment, (comment) => comment.user, { cascade: true})
    comments: Comment[]

}
