import { config } from 'dotenv';

config();

const { PORT, NODE_ENV } = process.env;

export const Config = {
    port: PORT,
    env: NODE_ENV,
};
