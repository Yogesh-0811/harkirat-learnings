import {Client} from "pg";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const pgClient = new Client({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

async function main(){
    try{
        await pgClient.connect();
        console.log("Connected to Postgres");
        const response = await pgClient.query("SELECT * FROM users");
        console.log(response.rows);
    }catch(err){
        console.error("Connection error: ",err);
    }
}

main();

app.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;
    try{
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`
        const response =  await pgClient.query(insertQuery, [username,email,password]);
        res.json({
            message: "You have signed up"
        })
    }catch(e){
        console.log(e);
        res.json({
            message: "Error signing up"
        })
    }
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
