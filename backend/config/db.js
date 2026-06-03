import mongoose from "mongoose";

export default async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Connected to MongoDB successfully!');

    } catch (error) {

        console.error('MongoDB connection failed:', error)

    }


}