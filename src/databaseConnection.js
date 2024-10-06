import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path: './.env'})


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://likhithpalya:q1Cvj0YJiA9qu2jb@vote-me.pzryg.mongodb.net/?retryWrites=true&w=majority&appName=vote-me`)
        console.log(`\n MongoDB connection successful DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error occured while connecting to DB ${error}`)
        process.exit(1)
    }
}



export default connectDB;