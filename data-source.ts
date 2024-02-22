import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateUser1707345967223 as CreateUserMigration } from "./migration/1707345967223-createUser"
import { CreatePost1707348716524 } from "./migration/1707348716524-createPost"
import { Post } from "./entity/Post"
import { Comment } from "./entity/Comment"
import { Author } from "./entity/Author"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: "all",
    entities: [User, Post, Comment, Author],
    migrations: [CreateUserMigration, CreatePost1707348716524],
    subscribers: [],
})
