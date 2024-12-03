import { createUser } from "../repositories/userRepositories.js";

export const createUserService = async (createUserObject) => {
    console.log(createUserObject);
   
    const post = await createUser(createUserObject);

    return post;
}