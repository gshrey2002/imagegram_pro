import Post from "../schema/post.js"

export const findAllPost=async (offset,limit)=>{
    try {
        const posts=await Post.find().sort({createdAt:-1}).skip(offset).limit(limit).populate("user","email");
    return posts;
    } catch (error) {
        console.log(error);
    }
}
export const countAllPost=async ()=>{
   try {
     const count = await Post.countDocuments();
    return count;
   } catch (error) {
    console.log(error);
   }
}
export const findPostById=async (id)=>{
    try {
        const post=await Post.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}

export const createPost =async (caption,image,user)=>{
    try {
        const newPost=await Post.create({caption,image,user});
        return newPost;
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=async (id)=>{
    try {
        const deletedPost=await Post.deleteOne(id);
        return deletedPost;
    } catch (error) {
        console.log(error);
    }
}

export const updatePost=async(id,data)=>{
    try {
        const updatedPost=await Post.findByIdAndUpdate(id,data,{new:true});
        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}