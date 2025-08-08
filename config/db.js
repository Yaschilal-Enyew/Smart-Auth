// config/db.js
import mongoose from 'mongoose';
import 'dotenv/config';


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected!");
    } catch (err) {
        console.log("MongoDB connection error:", err);
        process.exit(1); // Optional: exit if DB connection fails
    }
};

