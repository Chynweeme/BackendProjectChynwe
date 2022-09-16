import jwt from 'jsonwebtoken';
import { user } from '../models/userModels.js';


export const verifyToken = async(req,res,next)=>{
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
            req.user = await user.findById(decoded.id).select("-password");
            next();

        } catch (error) {
            console.error(error.message);
        }
    }

    if(!token) {
        res.status(401);
        throw new Error('Not Authorized');
    }
}

export const prof = async(req,res,next)=>{
    if (req.user && req.user.role === "professional"){
        next()
    } else{
        res.status(401);
        throw new Error('Not Authorized');
    }
}

export const adminUser = async(req,res,next)=>{
    if (req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401);
        throw new Error('Not Authorized');
    }
}