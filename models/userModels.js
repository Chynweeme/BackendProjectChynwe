import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true,
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
            required: true,
            unique: true
            }
        ],
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ['Regular','Professional'],
            required:false
            
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

// hash password
userSchema.pre('save', async function(next){
    const userz = this
    if(userz.isModified('password')){
        const salt = await bcrypt.genSalt();
        userz.password = await bcrypt.hash(userz.password,salt);
        next();
    }
})

export const user = mongoose.model('user',userSchema)