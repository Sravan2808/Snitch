import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome to Snitch API"});
})

app.use("/api/auth",authRoutes)

export default app;