import {z} from "zod";

const ACCEPTED_FILE_TYPES=["image/jpeg","image/jpg","image/png"]

export const zodPostSchema=z.object({
    caption:z.string({message:"Caption is required"}).min(1).max(100),
    image:z.any().refine((file)=>ACCEPTED_FILE_TYPES.includes(file?.[0]?.type),
    ".jpg, .jgpg, .png files are allowed")
})