import express, { Request, Response } from 'express';
// import chalk from 'chalk';
import morgan from 'morgan';
import cors from 'cors';
import goalRoutes from './routes/goalRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev')) // logging

// api routes
app.use('/api/v1/goals', goalRoutes)
app.use('/api/v1/auth', authRoutes)

export default app;
