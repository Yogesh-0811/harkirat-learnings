const express = require('express');
const bcrypt=require('bcrypt');
const { UserModel, TodoModel } = require('./db');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const JWT_SECRET = "yogo1234";
mongoose.connect("mongodb+srv://yogesh:Yogesh0811@cluster15.wrgi9d7.mongodb.net/todo-yogesh-2");
const { z } = require("zod");

app.post("/signup", async function(req,res){
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })
    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // if(typeof email !== "string" || email.legnth<5 || !email.includes("@")){
    //     res.json({
    //         message: "Email incorrect"
    //     })
    //     return
    // }
    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            email:email,
            password: hashedPassword,
            name:name
        })

        console.log({
            original: password,
            hashed: hashedPassword
        });
    }catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown = true;
    }
    if(!errorThrown){
        res.json({
            message: "You are logged in"
        })
    }

});
app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
    })

    if(!user){
        res.status(403).json({
            message: "User does not exist in our db"
        })
        return
    }

    console.log(user);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
        const token=jwt.sign({
            id: user._id
        },JWT_SECRET);
        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData=jwt.verify(token, JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.post("/todo", auth, function(req,res){
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId: userId
    })
});
app.get("/todos", auth, async function(req,res){
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
});

app.listen(3000);

//check that the password has q uppercase char, q lowercase char, 1 spl character

//More in Typescript