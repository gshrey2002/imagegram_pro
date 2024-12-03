import  Express  from "express";
import { createPost, getAllPost, getPostById} from "../controller/postController.js";
import { s3uploader } from "../config/multerConfig.js";

const router = Express.Router();

router.post("/post",s3uploader.single("image"),createPost);
router.get("/allPost",getAllPost);
router.get("/post/:id",getPostById);


export default router