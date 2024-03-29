import { Not } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import * as readline from 'readline';

AppDataSource.initialize().then(async () => {


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });



    rl.question(
        `Qual entidade quer tratar 
        1 - Author
        2 - Comments
        3 - Post
        4 - User`, 
        (answer) => {
            switch(answer.toLowerCase()) {
            case '1':
                console.log('Author');
                break;
            case '2':
                console.log('Comments');
                break;
            case '3':
                console.log('Post');
                break;
            case '4':
                console.log('User');
                break;
            default:
                console.log('Invalid answer!');
            }
            rl.close();
        });




    /*console.log("Searching for current users...")
    const users = await AppDataSource.manager.find(User)
    console.log(users)

    console.log('Deleting existent users...');
    users.forEach(async u => {
        const usrDeleted = await AppDataSource.manager.delete(User, u.id)
        console.log(`Deleted : ${usrDeleted}`)
    })

    console.log("Inserting a new user into the database...")
    const user = new User()
    //user.firstName = "Timber"
    //user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Updated usr at database...")
    user.age = 35
    await AppDataSource.manager.save(user)

    console.log("queries ...")
    console.log("left join ...")
    const usrPostLeftJoinResult = await AppDataSource.manager.findOne(
        User,
        {
            where: {
                firstName: "Timber"
            },
            relations: {
                posts: true
            }
        }
    )
    
    console.log(usrPostLeftJoinResult)

    console.log("select join ...")
    const usrPostSelectJoinResult = await AppDataSource.manager.findOne(
        User,
        {
            where: {
                firstName: "Timber"
            },
            relations: {
                posts: true
            },
            relationLoadStrategy: "query"
        }
    )
    console.log(usrPostSelectJoinResult)

    console.log("select join ...")
    const usrPostInnerJoinResult = await AppDataSource.manager.findOne(
        User,
        {
            where: {
                firstName: "Timber",
                posts: {
                    id: Not(0)
                }
            },
            relations: {
                posts: true
            },
            relationLoadStrategy: "join"
        }
    )
    console.log(usrPostInnerJoinResult)

    const p = new Post()
    p.title = 'My Title'
    p.text = 'Text text text'
    p.user = usrPostSelectJoinResult
    const createdPost = await AppDataSource.manager.save(p)

    const usrPostInnerJoinResultDeclarative = await AppDataSource.manager
        .createQueryBuilder(User, "usr")
        .leftJoinAndSelect("usr.posts", "p")
        .where("usr.firstName = :name", {name: "Timber"})
        .getOne();

    console.log(usrPostInnerJoinResultDeclarative)

    console.log("native queries...");
    const rawData = await AppDataSource.manager.query('SELECT * FROM USER');
    console.log(rawData);

    console.log("Here you can setup and run express / fastify / any other framework.")
    */

    console.log("subiu")

    

}).catch(error => console.log(error))

