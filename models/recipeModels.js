import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
    {
        recipeName:{
            type: String,
            required: true
        },
        author:
        {
            type: String,
            required: true
        },
        ingredients:[
            {
            type: String,
            required: true
            }
        ],
        duration:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        photo:{
            type: String,
            required: true
        },
        comment:[{type:String}],
        rating:
        {
            type:Number,
            default: 0
        },
        similarRecipe: [String],
        tag: 
        {
            type: String,
            required: true
        },
        likes:[String],
        likeCount:
        {
            type: Number,
            default: 0
        }
             
    }, 
    {
        timestamps: true,
    }
)

export const recipe = mongoose.model('recipe',recipeSchema)