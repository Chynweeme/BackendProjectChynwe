import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import createRecipe from './routes/recipeRoute.js';
import createUser from './routes/userRoute.js';


dotenv.config();
connectDB();

const app = express()

app.use(express.json())

const port = 5800

app.get('/',(req,res)=>{
    res.send("Nna ehn... I don taya!!")
})

app.use('/recipe',createRecipe )
app.use('/user', createUser )

app.listen (port,()=>{
    console.log(`This project is running at ${port}`)
})