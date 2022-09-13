import express from 'express';
import { deleteRecipe, getAllRecipe, getRecipe, newRecipe, updateRecipe } from '../controllers/recipeController.js';
import { verifyToken } from '../middleware/authMiddle.js';

const router = express.Router();

router.get('/',getAllRecipe)
router.post('/create', verifyToken ,newRecipe)
router.post('/:id', getRecipe)
router.put('/update/:id', updateRecipe)
router.delete('/delete/:id',deleteRecipe)



export default router;