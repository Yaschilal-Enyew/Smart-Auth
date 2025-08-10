import 'dotenv/config';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from './config/db.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'https://smart-auth-frontend-nine.vercel.app/',
  credentials: true
}));
app.use(cookieParser());

// API Endpoints
app.get('/', (req, res) => res.send('API is working'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is started on port ${PORT}`);
    });
});

