import { isUserExist } from "../service/userService.js";
import { verifyJWTToken } from "../utils/generateJWTTokens.js";

export const authMiddleware=async (req,res,next)=>{
    const token=req.headers["x-access-token"];
    if(!token) {
        return res.status(401).json({
            success:false,
            message:"Unauthorized, Token is Required"
        })
    }

    try {
        const response=verifyJWTToken(token);
        const doesUserExist=await isUserExist(response.email);
        if(!doesUserExist) {
            return res.status(401).json({
                success:false,
                message:"Unauthorized, User not found"
            })
        }
        req.user=response;

        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Unauthorized, Invalid Token"
        })
    }
   
}

