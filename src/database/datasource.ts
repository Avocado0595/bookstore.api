import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "bookstore",
})
export default AppDataSource;