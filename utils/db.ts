import mongoose from "mongoose"
import { ConnectOptions } from "mongoose"


const MongoUrl = process.env.MONGODB_URL as string
const dbConnect = async () => {
    if (mongoose.connections[0].readyState) return

    try{
        await mongoose.connect(MongoUrl)

        console.log("Connection to database Successful")
    }catch(error) {
        throw new Error("Unable to connect to database.")
    }
    
}

export default dbConnect;