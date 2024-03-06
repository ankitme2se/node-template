import logger from '../config/logger.js';

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                path: '',
                location: '',
            },
        ],
    });
};

export default errorHandler;
