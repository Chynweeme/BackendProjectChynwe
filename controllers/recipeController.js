import express from 'express'
import mongoose from 'mongoose';


import {recipe} from '../models/recipeModels.js'
import { generateToken } from '../utils/util.js';

export const newRecipe = async(req,res)=>{
    try {
        const {recipeName,ingredients,duration,description,tag}= req.body;
         const createRecipe = await recipe.create({
            recipeName,
            ingredients,
            duration,
            description,
            tag,
            photo,
            author
         });
         if(createRecipe){
            res.json({
                _id: createRecipe._id,
                recipeName: createRecipe.recipeName,
                ingredients: createRecipe.ingredients,
                duration: createRecipe.duration,
                description: createRecipe.description,
                tag: createRecipe.tag,
                photo: createRecipe.photo,
                author: req.user.userName,
                token: generateToken(createRecipe._id)
            })
         }

        await createRecipe.save();
        res.json({
            message: "New recipe created successfully!",
            data: createRecipe
        } )
    } catch (error) {
        console.error(error.message);
    }
}

// get all recipe

export const getAllRecipe = async(req,res)=>{

    try{
        const rec = await recipe.find()

        if (rec){
            res.send(rec)
        }else{
            res.send('No organization found')
        }

    }catch(error){
        console.error(error.message)
    }

}

// get recipe by ID

export const getRecipe = async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({message: "Recipe not found"});
        }
        const id = req.params.id;
        const rec = await recipe.findById(id);
        if(rec){
            res.send(rec);
        }

    }catch(error){
        console.error(error.message);
    }
}


//update Organization
export const updateRecipe = async(req,res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({ 
             message:"Recipe not found"
         });
         }
         const id = req.params.id;
         const rec = await recipe.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true
         })
         if(rec){
            res.json({
                message: "Recipe updated successfully",
                data: rec
            })
         }
    }catch(error){
        console.error(error.message);
    }
}


//delete Recipe

export const deleteRecipe = async(req,res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({ 
             message:"Recipe not found"
         });
         }
         const id = req.params.id;
         const rec = await recipe.findByIdAndDelete(id)
         if(rec){
            res.json({message: "Recipe deleted successfully!"})
         }
    }catch(error){
        console.error(error.message)
    }
}