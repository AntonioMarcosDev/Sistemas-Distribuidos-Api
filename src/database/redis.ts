import Redis from "ioredis";

//Conectando ao redis
const redisClient = new Redis(process.env.REDIS_URL || "redis://localhost:6379", {
    maxRetriesPerRequest: null,
});

export default redisClient;
