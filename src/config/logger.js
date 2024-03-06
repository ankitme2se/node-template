import winston from 'winston';
import { Config } from '../config/index.js';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'ankit-project',
    },
    transports: [
        new winston.transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'combined.log',
            // silent: false,
            silent: Config.env === 'test',
        }),
        new winston.transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'err.log',
            // silent: false, when the silent is false then only it logs
            silent: Config.env === 'test',
        }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                // winston.format.simple(),
                winston.format.timestamp(),
                winston.format.json(),
                // winston.format.colorize(),
            ),
            silent: Config.env === 'test',
        }),
    ],
});

export default logger;
