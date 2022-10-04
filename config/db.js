import mongoose from 'mongoose'


export const connectDB = async() => {
    try {
        mongoose.connect("mongodb+srv://dipo:12345@cluster0.hsmvzfx.mongodb.net/test")
        console.log(`Connected to MongoDB Successfully Chynwe ooo`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};