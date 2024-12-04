import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/serverConfig.js";

export const genrateJWTToken=(payload)=>{
    return jwt.sign(payload,JWT_SECRET_KEY,{expiresIn:"1d"});
}

export const verifyJWTToken=(token)=>{
    return jwt.verify(token,JWT_SECRET_KEY);
}