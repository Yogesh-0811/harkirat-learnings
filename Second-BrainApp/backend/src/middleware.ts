import type { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

interface AuthenticatedRequest extends Request{
    userId?: string;
}

interface JWTPayloadWithId{
    id: string;
}

export const userMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction)=>{
    const header = req.headers["authorization"];
    if(!header){
        return res.status(401).json({message: "No token provided"});
    }
    const token = header.split(" ")[1];
    try{
        const decoded = jwt.verify(token as string, JWT_SECRET) as JWTPayloadWithId;
        req.userId = decoded.id;
        next();
    }catch(err){
        res.status(403).json({message: "Incorrect credentials"});
    }
}