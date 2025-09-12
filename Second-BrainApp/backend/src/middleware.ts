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
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({message: "No token provided"});
    }
    try{
        const decoded = jwt.verify(token as string, JWT_SECRET) as JWTPayloadWithId;
        req.userId = decoded.id;
        next();
    }catch(err){
        res.status(403).json({message: "Incorrect credentials"});
    }
}