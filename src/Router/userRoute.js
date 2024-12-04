import  Express  from "express";
import { createUserController, signInController } from "../controller/userController.js";
import { zodSignupSchema } from "../validators/signupValidator.js";
import { validate } from "../validators/zodValidator.js";
import { zodSignInSchema } from "../validators/zodSignInValidator.js";

const router=Express.Router();

router.post("/createUser",validate(zodSignupSchema),createUserController);
router.post("/loginUser",validate(zodSignInSchema),signInController);


export default router;