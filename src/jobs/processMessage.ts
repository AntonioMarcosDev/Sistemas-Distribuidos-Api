import { Worker } from 'bullmq';
import prismaClient from '../database/prisma';
import redisClient from '../database/redis';

console.log('Worker started');

const worker = new Worker(
    'messageQueue',
    async (job) => {
        if (job.name === "newMessage") {
            await prismaClient.message.create({
                data: job.data
            });
        }
        console.log('Processing message:', job.data.content);
    },
    { connection: redisClient }
);

worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err);
});

worker.on('error', (err) => {
    console.error('Worker error:', err);
});
