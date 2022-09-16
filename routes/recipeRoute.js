import express from 'express';
import { deleteRecipe, getAllRecipe, getRecipe, newRecipe, updateRecipe } from '../controllers/recipeController.js';
import { adminUser, prof, verifyToken } from '../middleware/authMiddle.js';

const router = express.Router();

router.get('/',getAllRecipe)
router.post('/create', verifyToken ,prof, newRecipe)
router.post('/:id', verifyToken, getRecipe)
router.put('/update/:id',verifyToken,adminUser, updateRecipe)
router.delete('/delete/:id',verifyToken,adminUser, deleteRecipe)



export default router;