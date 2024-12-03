import User from "../schema/user.js";

export const findUserByEmail=async (email)=>{
    try {
       const user=await user.findOne({email});
       return user;
    } catch (error) {
       console.log(error); 
    }
}

export const findAllUser = async ()=>{
    try {
        const users=await user.find();
            return users;

    } catch (error) {
        console.log(error);
    }
}

export const findUserById=async(id)=>{
    try {
        
    } catch (error) {
        
    }
}

export const createUser=async(user)=>{
    try {
        const newUser=await User.create(user);
        return newUser;

    } catch (error) {
        console.log(error);
    }
}