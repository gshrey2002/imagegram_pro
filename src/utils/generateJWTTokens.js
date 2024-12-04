import jwt from "jsonwebtoken";

export const genrateJWTToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:"1d"});
}