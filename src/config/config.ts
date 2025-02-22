import "dotenv/config";

export const config = {
    port: process.env.PORT || 8080,
    database_url: process.env.DATABASE_URL,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    redis_host: process.env.REDIS_HOST,
    redis_port: process.env.REDIS_PORT,
    redis_url: process.env.REDIS_URL || "redis://localhost:6379"
};