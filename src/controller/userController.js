import { createUserService, singInUserService } from "../service/userService.js";


export const createUserController=async (req,res)=>{
   try {
    console.log(req.body);
    const user=await createUserService(req.body);
    
    return res.status(200).json({
        success:true,
        message:"User created successfully",
        data:user
    })
   } catch (error) {
    console.log(error);
    if(error.status) {
        return res.status(error.status).json({
            success: false,
            message: error.message
        })
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}
}   


export async function signInController(req,res){
    try {
        // console.log(req.body);
        const user=await singInUserService(req.body);
        
        return res.status(200).json({
            success:true,
            message:"logged in  successfully",
            data:user
        })
       } catch (error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}