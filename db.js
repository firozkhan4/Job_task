import mongoose from "mongoose";

async function connectDb(){
    try{
        const conn = await mongoose.connect("mongodb+srv://root:root@cluster0.snbyy.mongodb.net/?appName=Cluster0")

        console.log("Connected MongoDb")
    }catch(error){
        console.log(error.message)
    }
}

export default connectDb