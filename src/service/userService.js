import { createUser } from "../repositories/userRepositories.js";

export const createUserService = async (createUserObject) => {
 try {
    console.log(createUserObject);
   
    const post = await createUser(createUserObject);

    return post;
 } catch (error) {
    if(error.name === "MongoServerError" && error.code === 11000) {
        throw {
            status: 400,
            message: "User with the same email or username already exists"
        }
    }
    throw error;
}
}