import mongoose, { Mongoose } from "mongoose";

const postSchema=new mongoose.Schema({
    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        minLength:5,

    },
    caption:{
        type:String,
        minLength:5,
        maxLength:200,
       
    },
    image:{
        type:String,
        required:true,
        
    },
    location:{
        required:false,
        type:String

    },
    comments:{
        type:String,
        maxLength:100,
        
    }
},{
    timestamps:true
})

const post=mongoose.model("Post",postSchema);

export default post;