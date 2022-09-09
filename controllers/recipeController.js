import express from 'express'
import mongoose from 'mongoose';

import {recipe} from '../models/recipeModels.js'

export const newRecipe = async(req,res)=>{
    try {
        const rec = new recipe(req.body); 

        await rec.save();
        res.json({
            message: "New recipe created successfully!",
            data: rec
        } )
    } catch (error) {
        console.error(error.message);
    }
}

// get all recipe

export const getAllRecipe = async(req,res)=>{

    try{
        const rec = await new recipe.find()

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

