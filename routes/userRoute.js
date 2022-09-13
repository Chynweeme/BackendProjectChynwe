import express from 'express';
import { deleteUser, getAllUsers, getUser, loginUser, signUp, updateUser } from '../controllers/userController.js';


const router = express.Router();


router.post('/signup', signUp)
router.post('/login',loginUser)
router.get('/',getAllUsers)
router.get('/:id',getUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)


export default router;