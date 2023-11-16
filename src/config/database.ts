import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "express-api-mvc",
    logging: false,
    models: [],
});

export default connection;