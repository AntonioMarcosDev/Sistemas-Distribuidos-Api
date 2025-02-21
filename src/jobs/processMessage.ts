import { Worker } from 'bullmq';
import prismaClient from '../database/prisma';
import redisClient from '../database/redis';

const worker = new Worker(
    'messageQueue',
    async (job) => {
        console.log('Processing message:', job.data.content);
        await prismaClient.message.create({ data: { content: job.data.content } });
    },
    { connection: redisClient }
);

worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err);
});
