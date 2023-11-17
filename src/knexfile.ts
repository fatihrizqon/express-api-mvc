require('dotenv').config();
require('ts-node/register');
import type { Knex } from 'knex';

const environments: string[] = ['development', 'staging', 'production'];

const connection: Knex.ConnectionConfig = {
    host: 'localhost',
    database: 'express-api-mvc',
    user: 'postgres',
    password: 'root',
};

const commonConfig: Knex.Config = {
    client: 'pg',
    connection,
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'migrations',
        directory: 'database/migrations'
    },
    seeds: {
        directory: 'database/seeds'
    }
};

export default Object.fromEntries(environments.map((env: string) => [env, commonConfig]));