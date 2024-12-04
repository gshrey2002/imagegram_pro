import { createUser, findUserByEmail } from "../repositories/userRepositories.js";
import { genrateJWTToken } from "../utils/generateJWTTokens.js";
import bcrypt from "bcrypt";


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

export const singInUserService = async (createUserObject) => {
    try {
        const user = await findUserByEmail(createUserObject.email);
        if(!user) {
            throw {
                status: 404,
                message: "User not found"
            }
        }
        const passwordMatch = await bcrypt.compare(createUserObject.password, user.password);
        if(!passwordMatch) {
            throw {
                status: 401,
                message: "Invalid password"
            }
        }

        const token=genrateJWTToken({email:user.email,_id:user._id,username:user.username});

        return token;
    } catch (error) {
        console.log(error);
    }
}