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
    const {username,email,password,city,country,street,pincode} = req.body;
    try{
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
        const response =  await pgClient.query(insertQuery, [username,email,password]);
        const userId = response.rows[0].id;
        const addressInsertQuery = `INSERT INTO addresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5);`
        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city,country,street,pincode, userId])
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

app.get("/metadata",async (req,res)=>{
    const id = req.query.id;
    const query1 = 'SELECT username, email, id FROM users WHERE id=$1';
    const response1 = await pgClient.query(query1, [id]);
    const query2 = 'SELECT * FROM addresses WHERE user_id=$1';
    const response2 = await pgClient.query(query2, [id]);

    res.json({
        user: response1.rows[0],
        address: response2.rows[0]
    })
})

app.get("/better-metadata", async (req,res)=>{
    const id = req.query.id;
    const query = 'SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1;'
    const response = await pgClient.query(query, [id]);
    res.json({
        response: response.rows
    })
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});
