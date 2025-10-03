import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
app.use(express.json());
const client = new PrismaClient();
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true
        }
    });
    res.json({
        users
    });
});
app.listen(3000);
async function createUser() {
    // await client.user.create({
    //     data:{
    //         username: "Yogesh",
    //         password: "123123",
    //         age: 23,
    //         city: "Pune"
    //     }
    // })
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(user);
    if (!user) {
        console.log("User not found");
        return;
    }
    // const todo = await client.todo.create({
    //     data:{
    //         title: "Learn Prisma",
    //         description: "Finish practicing relations",
    //         done: false,
    //         city: 1,
    //         userId: user?.id, 
    //     }
    // })
    // console.log("Created Todo: ", todo);
}
createUser();
