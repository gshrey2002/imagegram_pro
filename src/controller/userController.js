import { createUserService } from "../service/userService.js";


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


// const username = createUserObject.username?.trim();
// if(!username){
//     return res.status(400).json({
//         success: false,
//         message: "Username is required",
//       });
// }
// const email = createUserObject.email;
// if(!email){ 
//     return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
// }

// const password = createUserObject.password; 
// if(!password){
//     return res.status(400).json({
//         success: false,
//         message: "Password is required",
        
//       });
// }