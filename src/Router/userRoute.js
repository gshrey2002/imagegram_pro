import  Express  from "express";
import { createUserController } from "../controller/userController.js";
import { zodSignupSchema } from "../validators/signupValidator.js";
import { validate } from "../validators/zodValidator.js";

const router=Express.Router();

router.post("/createUser",validate(zodSignupSchema),createUserController);

export default router;