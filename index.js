import express from "express"
import User from "./User.js"
import connectDb from "./db.js";

const app = express()
const PORT = 3000;

import dns from "node:dns/promises";   
dns.setServers(["1.1.1.1", "1.0.0.1"]); 

connectDb()

app.use(express.json())

async function userCreate(user){
    const {email,name} = user;
    console.log(user)
    try{
        const exists = await User.exists({email})
        if(exists){
            throw new Error("User already exists")
        }
        const newUser = await User.create(user);
        return {output: newUser};
    }catch(error){
        console.log(error.message)
        throw error
    }
}

async function handleUserCreate(req,res){
    const result = await userCreate(req.body)
    res.status(200).json(result)
    
}

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "OK"
    })
})
app.post('/users',handleUserCreate)

app.use((err,req,res,next)=>{
    res.status(500).json({
        errorMessage: err.message
    })
})


app.listen(PORT,()=>{
    console.log("Server is running")
})