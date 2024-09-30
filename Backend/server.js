import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoute from './routes/auth.route.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5100;
const app = new express();


app.use(express.json());

app.use(cors());
app.use('/api/v1/', authRoute);

app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`);
    connectDB();
})