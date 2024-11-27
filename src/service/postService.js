// import { createPost } from "../controller/postController.js";

import { createPost, findAllPost, findPostById } from "../repositories/postRepositories.js";

export const createPostService = async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    // const user = createPostObejct.user; add later

    const post = await createPost(caption, image);

    return post;
}

export const findAllPostService=async ()=>{
    const post=await findAllPost();

    return post;
}

export const findPostByIdService=async (id)=>{
    console.log(id);
const post = await findPostById(id);

return post;
}