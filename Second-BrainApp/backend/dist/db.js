import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
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
