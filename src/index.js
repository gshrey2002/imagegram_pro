import express  from "express";
import connectDb from "./config/dbConfig.js";
import { s3uploader } from "./config/multerConfig.js";
import { createPost, getAllPost, getPostById } from "./controller/postController.js";
import postRouter from "./Router/post.js";

const PORT=3000;
const app=express();

app.use(express.json());
app.use(express.text());

app.get('/ping',(req,res)=>{
    return res.json({message:"pong"})
})
// app.post('/post',s3uploader.single("image"),createPost)
// app.get('/allPost',getAllPost)
// app.get('/post/:id',getPostById);
app.use("/api/v1post",postRouter)

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectDb();
})