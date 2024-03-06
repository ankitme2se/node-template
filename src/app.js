import express from 'express';
// We can give any name in place of createError in below line
// import createError from 'http-errors';
import logger from './config/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import authRouter from './routes/auth.js';

const app = express();

app.get('/', (req, res) => {
    logger.info('/, api called');
    // const err = createError(401, 'You are not allowed to access this page');
    // throw err;
    res.send(`Welcome to Ankit's Project`);
});

app.use('/auth', authRouter);
app.use(errorHandler);

export default app;
