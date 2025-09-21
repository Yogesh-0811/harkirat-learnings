import mongoose, { model, Schema } from "mongoose";
import { MONGO_URI } from "./config.js";
export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error("Mongo connection failed", err);
        process.exit(1);
    }
}
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
export const userModel = model("Users", UserSchema);
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'Users', required: true }
});
export const ContentModel = model("Content", ContentSchema);
const ShareSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
    contentIds: [{ type: mongoose.Types.ObjectId, ref: "Content" }],
    shareLink: { type: String, unique: true, required: true }
});
export const ShareModel = model("Share", ShareSchema);
