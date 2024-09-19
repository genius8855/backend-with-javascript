import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://sahil8855:sahil8855@cluster0.1okpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`\n MongoDB connected !! DB HOSt: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("connection error", error);
        process.exit(1)
    }
}

export default connectDB;