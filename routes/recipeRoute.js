import express from 'express';
import { getAllRecipe, newRecipe } from '../controllers/recipeController.js'

const router = express.Router();

router.get('/',getAllRecipe)
router.post('/create',newRecipe)




export default router;