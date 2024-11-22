import { createPostService } from "../service/postService.js";


export async function createPost(req, res) {
    console.log(req.file); // req.file.location

    const post=await createPostService({
        caption:req.body.caption,
        image:req.file.location
    })
    // // call the service layer function
    // if(!req.file || !req.file.location) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Image is required"
    //     });
    // }
    return res.json({
        success:true,
        message:"Post Created Successfully",
        data:post

    })
}