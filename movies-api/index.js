import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import './db';
import './seedData'
import usersRouter from './api/users';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});