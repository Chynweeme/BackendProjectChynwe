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
            const decoded = jwt.verify(token,process.JWT_SECRET_KEY);
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