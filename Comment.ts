// Importar os módulos necessários do TypeORM
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

// Definir a entidade Comment
@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

    @ManyToOne(() => User, user => user.comments)
    user: User;
}