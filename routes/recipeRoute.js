import express from 'express';
import { deleteRecipe, getAllRecipe, getRecipe, newRecipe, updateRecipe } from '../controllers/recipeController.js'

const router = express.Router();

router.get('/',getAllRecipe)
router.post('/create',newRecipe)
router.post('/:id', getRecipe)
router.put('/update/:id', updateRecipe)
router.delete('/delete/:id',deleteRecipe)



export default router;