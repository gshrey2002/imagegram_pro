import { createPostService, deletePostbyIdService, findAllPostService, findPostByIdService, updatePostService } from "../service/postService.js";


export async function createPost(req, res) {
    console.log(req.file); // req.file.location
    if(!req.file || !req.file.location) {
        return res.status(400).json({
            success: false,
            message: "Image is required"
        });
    }

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
    return res.status(201).json({
        success:true,
        message:"Post Created Successfully",
        data:post

    })
}

export async function getAllPost(req,res){
try {
  let offset=req.query.offset || 0;
    let limit=req.query.limit || 10;
      const post=await findAllPostService(offset,limit);
  
      return res.status(200).json({
          success:true,
          data:post
      })
} catch (error) {
  console.log(error);
}
}


export async function getPostById(req, res) {
    try {
      const  postId  = req.params.id;
      console.log(postId);
  
      // Validate ID
      if (!postId) {
        return res.status(400).json({
          success: false,
          message: "Post ID is required",
        });
      }
  
      const post = await findPostByIdService( postId );
  
      // Check if post exists
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Post fetched successfully",
        data: post,
      });
    } catch (error) {
      console.error("Error fetching post:", error);
  
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching the post",
      });
    }
  }
  
export async function deletePostbyId(req,res){
try {
  const  postId  = req.params.id;
  console.log(postId);

  // Validate ID
  if (!postId) {
    return res.status(400).json({
      success: false,
      message: "Post ID is required",
    });
  }
  const deletedPost=await deletePostbyIdService(postId);

  if(!deletedPost){
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
   
  })
} catch (error) {
  console.log(error);
  return res.status(500).json({
    success: false,
    message: "An error occurred while deleting the post",
  });
}
}

export async function updatePostbyId(req,res){
try {
  const postId=req.params.id;
  const data=req.body;
  const updatedPost=await updatePostService(postId,data);
  res.status(200).json({
    success:true,
    message:"Post Updated Successfully",
    data:updatedPost
  })
} catch (error) {
  console.log(error);
  return res.status(500).json({
    success: false,
    message: "An error occurred while updating the post",
  });
}
} 