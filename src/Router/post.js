import  Express  from "express";
import { createPost, getAllPost, getPostById, deletePostbyId} from "../controller/postController.js";
import { s3uploader } from "../config/multerConfig.js";
import { validate } from "../validators/zodValidator.js";
import { zodPostSchema } from "../validators/postValidator.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Express.Router();

router.post("/post",authMiddleware,s3uploader.single("image"),validate(zodPostSchema),createPost);
router.get("/allPost",authMiddleware,getAllPost);
router.get("/post/:id",getPostById);
router.delete("/post/:id",authMiddleware,deletePostbyId);  
router.put("/post/:id",s3uploader.single("image"),createPost);


export default router