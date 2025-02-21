import { Worker } from 'bullmq';
import prismaClient from '../database/prisma';
import redisClient from '../database/redis';

const worker = new Worker(
    'messages',
    async (job) => {
        if (job.name === "newMessage") {
            await prismaClient.message.create({
                data: job.data
            });
        }
        console.log('Processando mensagem:', job.data.content);
    },
    { connection: redisClient }
);

worker.on('completed', (job) => {
    console.log(`Tarefa ${job.id} completa`);
});

worker.on('failed', (job, err) => {
    console.error(`Tarefa ${job?.id} falhou:`, err);
});

worker.on('error', (err) => {
    console.error('Erro no Worker:', err);
});
