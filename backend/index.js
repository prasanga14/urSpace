import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Connected to DB and server running at ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err.message));
