import { Queue } from "bullmq";
import redisClient from "../database/redis";

export const messageQueue = new Queue("messages", {
    connection: redisClient
});