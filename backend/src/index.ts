import express, {Request,Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';


    mongoose.connect(process.env.MONGODB as string)
    .then(()=>{
        console.log('Connected to the database')
    })
    .catch((error)=>console.log(error))


const app=express();
app.use(express.json());

app.get('/test',async(req:Request,res:Response)=>{
    res.json({message:"Hello World"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})