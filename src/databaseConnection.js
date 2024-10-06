import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({path: './.env'})


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connection successful DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Error occured while connecting to DB ${error}`)
        process.exit(1)
    }
}



export default connectDB;
