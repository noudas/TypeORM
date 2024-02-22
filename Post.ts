import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Comment } from "./Comment"
import { Author } from "./Author"

@Entity()
@Unique(["title"])
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToOne(() => User, (user) => user.posts, {
        onDelete: "CASCADE"
    })
    user: User

    @ManyToOne(() => Author, (author) => author.posts, {
        onDelete: "CASCADE"
    })
    author: Author

    @OneToMany(() => Comment, (comments) => comments.post, { cascade: true})
    comments: Comment[]

}