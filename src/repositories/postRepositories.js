import Post from "../schema/post.js"

export const findAllPost=async ()=>{
    try {
        const posts=await Post.find();
    return posts;
    } catch (error) {
        console.log(error);
    }
}

export const findPostById=async (id)=>{
    try {
        const post=await Post.findById({id});
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const createPost =async (caption,image)=>{
    try {
        const newPost=await Post.create({caption,image});
        return newPost;
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=async (id)=>{
    try {
        const deletedPost=await Post.deleteOne({id});
        return deletedPost;
    } catch (error) {
        console.log(error);
    }
}