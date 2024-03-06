import { Config } from './config/index.js';
import logger from './config/logger.js';
import app from './app.js';

// console.log('Port', Config.port);
// console.log('Environment', Config.env);

const startServer = () => {
    const port = Config.port;
    try {
        app.listen(port, () => logger.info(`server listening on port:${port}`));
    } catch (err) {
        // console.error(err);
        if (err instanceof Error) {
            logger.error(err.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};

startServer();
