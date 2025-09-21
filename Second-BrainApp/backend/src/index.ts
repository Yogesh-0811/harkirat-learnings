import express from "express";
import type { Request , Response} from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { userModel , connectDB, ContentModel, ShareModel } from "./db.js";
import { JWT_SECRET } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { v4 as uuidv4} from "uuid";
import cors from "cors";

interface AuthenticatedRequest extends Request {
  userId?: string;
}
const app = express();
app.use(express.json());
app.use(cors());
connectDB().then(()=>{
    app.listen(3000, ()=>console.log("Server running on port 3000"));
})



app.post("/api/v1/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        await userModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "User signed up"
        })
    }catch(e){
        res.status(411).json({
            message: "User already exists"
        })
    }
    
})

app.post("/api/v1/signin", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_SECRET)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res: Response)=>{
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type; 
    const content = await ContentModel.create({
        title,
        link,
        type,
        userId: req.userId,
        tags: [],
    });
    res.json({message: "Content created", content});
})

app.get("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res: Response)=>{
    try{
        const userId = req.userId;
        const content = await ContentModel.find({
            userId: userId
        }).populate("userId","username")
        res.json({
            content
        });
    }catch(err){
        res.status(500).json({message: "Error fetching content", error:err});
    }
});

app.delete("/api/v1/content", userMiddleware, async (req: AuthenticatedRequest,res: Response)=>{
    try{
        const contentId = req.body.contentId;
        await ContentModel.deleteMany({
            _id: contentId,
            userId: req.userId
        })
        res.json({
            message: "Deleted"
        })
    }catch(err){
        console.error("Error deleting content: ", err);
        res.status(500).json({
            message: "Error deleting content"
        });
    }
});

app.post("/api/v1/brain/share", userMiddleware, async (req: AuthenticatedRequest,res: Response)=>{
    try{
        const { contentIds } = req.body;

        const count = await ShareModel.countDocuments({userId: req.userId});
        if(count>=3){
            return res.status(400).json({
                message: "You can only create up to 3 share links"
            });
        }

        const shareLink = uuidv4();
        const share = await ShareModel.create({
            userId: req.userId,
            contentIds,
            shareLink
        });
        res.json({
            message: "Share link generated",
            shareLink: `api/v1/brain/${shareLink}`,
            share
        });
    }catch(err){
        res.status(500).json({message: "Error creating share link"})
    }
})

app.get("/api/v1/brain/share", userMiddleware, async (req: AuthenticatedRequest, res: Response)=>{
    try{
        const shares = await ShareModel.find({userId: req.userId}).populate("contentIds");
        res.json({
            message: "Fetched all share links",
            count: shares.length,
            shares
        });
    }catch(err){
        res.status(500).json({message: "Error fetching share links"});
    }
});

app.delete("/api/v1/brain/share/:id", userMiddleware, async (req:AuthenticatedRequest, res: Response)=>{
    try{
        const {id} = req.params;
        const share = await ShareModel.findOneAndDelete({_id: id, userId: req.userId});
        if(!share){
            return res.status(404).json({message: "Share link not found or unauthorized"});
        }

        res.json({
            message: "Share link deleted successfully",
            deletedId: id
        });
    }catch(err){
        res.status(500).json({message: "Error deleting share link"});
    }
})

app.get("/api/v1/brain/:shareLink", userMiddleware, async (req: AuthenticatedRequest,res: Response)=>{
    try{
        const { shareLink } = req.params;

        const share = await ShareModel.findOne({shareLink}).populate("contentIds");
        if(!share){
            return res.status(404).json({message: "Invalid share link"});
        }
        res.json({
            sharedBy: share.userId,
            contents: share.contentIds
        });
    }catch(err){
        res.status(500).json({message: "Error fetching shared content"});
    }
});