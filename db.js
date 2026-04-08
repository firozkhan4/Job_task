import mongoose from "mongoose";
import "dotenv/config"

async function connectDb(){
    try{
        const conn = await mongoose.connect(process.en.MONGOURI)

        console.log("Connected MongoDb")
    }catch(error){
        console.log(error.message)
    }
}

export default connectDb