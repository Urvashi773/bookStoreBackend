import mongoose from "mongoose";

const emailSchema=  mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true
        },
        message:
        {
            type:String,
            required:true
        }

    }
)
const Email =mongoose.model("Email",emailSchema)
export default Email;