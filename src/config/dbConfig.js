import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";


export default async function connectDb(){
    try {
        await mongoose.connect(DB_URL);
        console.log("connected to mongoDB")
    } catch (error) {
        console.log("somethng went wrong while connecting with mongoDB");
        console.log(error);
    }
}