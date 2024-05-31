import { registerAs } from "@nestjs/config";

export default registerAs('dbconfig', () => ({
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    connection: process.env.DB_CONNECTION || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'bookstore',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
}))