import Redis from "ioredis";
import { config } from "../config/config";

//Conectando ao redis
const redisClient = new Redis(config.redis_url, {
    maxRetriesPerRequest: null,
});

export default redisClient;
