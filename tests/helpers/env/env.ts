import * as dotenv from 'dotenv'

export const getEnvVars = () => {
    dotenv.config({
        override: true,
        path: `tests/helpers/env/.env.prod`
    });
};