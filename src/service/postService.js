// import { createPost } from "../controller/postController.js";

import { countAllPost, createPost, deletePost, findAllPost, findPostById, updatePost } from "../repositories/postRepositories.js";

export const createPostService = async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    const userDetail=createPostObejct.user
    // const user = createPostObejct.user; add later

    const post = await createPost(caption, image,userDetail);

    return post;
}

export const findAllPostService=async (offset,limit)=>{
    // let offset=
    const post=await findAllPost(offset,limit);
    const totalDocument=await countAllPost();
    const totalPage=Math.ceil(totalDocument/limit); 
    const currentPage = Math.floor(offset / limit) + 1;
    // const currentPage=offset/limit + 1;   

    return {post,totalPage,totalDocument,currentPage};
}

export const findPostByIdService=async (id)=>{
    console.log(id);
const post = await findPostById(id);

return post;
}

export const deletePostbyIdService=async(id,user)=>{
//    try {

    const post=await findPostById(id);
    console.log("post user "+post.user);
    console.log("user "+user);
    if(post.user!=user){
        throw {
            status:401,
            message:"Unauthorized"
        }
    }
    const deletedPost=await deletePost(id);
    return deletedPost;
}
//    } catch (error) {
//     throw error;

//    }
// }

export const updatePostService=async(id,data)=>{
try {
    const updatedPost=await updatePost(id,data);
    return updatedPost;
} catch (error) {
    console.log(error);
}

}