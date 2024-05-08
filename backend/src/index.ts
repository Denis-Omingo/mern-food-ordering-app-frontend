import express, {Request,Response} from 'express';
import cors from 'cors';
import 'dotenv/config';

const app=express();
app.use(express.json());

app.get('/test',async(req:Request,res:Response)=>{
    res.json({message:"Hello World"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})