import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true
        },
        // rating:{
        //     type: Number,
        //     required: true
        // },
        // comment:{
        //     type: String
        // },
        email:[
            {
            type: String,
            required: true
            }
        ],
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ['Regular','Professional'],
            required: true
        },
        isAdmin:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const user = mongoose.model('user',userSchema)