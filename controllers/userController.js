import mongoose from "mongoose";
import {user} from "../models/userModels.js";
import { generateToken } from "../utils/util.js";


export const signUp =async(req,res)=>{
    const {userName,email,password, role}= req.body;
    const userExists = await user.findOne({email});

    if (userExists){
        throw new Error("User already exists! Please signup with a different password")
    }

    const newUser = await user.create({
        userName,
        email,
        password,
        role
    })

    if (newUser){
        res.json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            token: generateToken(newUser._id)
        })
    }
}   

export const loginUser = async(req,res)=> {
    const {email,password}= req.body;
    
    const User = await user.findOne({email});

    if (!User){
        throw new Error("Invalid email or password");
    }

    if (user) {
        res.json({
            _id: User._id,
            name: User.name,
            email:User.email,
            token: generateToken(User._id),
        });
    }
}  


//get all users
export const getAllUsers = async(req,res)=>{
    try{
        const all = await user.find();

        if (all){
            res.send(all);
        }else{
            res.send("No user found");
        }
    }catch(error){
        console.error(error.message);
    }
}

//get a single user
export const getUser = async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res. json ({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const all = await user.findById(id);
        if(all){
            res.send(all);
        }
    }catch (error){
        console.error(error.message);
    }
}


//update user profile
export const updateUser = async(req,res)=>{
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.json({
                message:"user not found"
            })
        }

        const id =req.params.id;
        const all = await user.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true
        })
        if(all){
            res.json({
                message: "User profile updated successfully",
                data: org
            });
        }
    } catch (error) {
        console.error(error.message)
    }
}

//delete user
export const deleteUser = async(req,res)=>{
   try{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.json({
            message: "user not found"
        });
    }
    const id = req.params.id;
    const all = await user.findByIdAndDelete(id);
    if(all){
        res.json({
            message:"user deleted"
        })
    }
   } catch(error){
        console.error(error.message);
   }
}