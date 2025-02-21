import { PrismaClient } from '@prisma/client';
import { messageQueue } from '../queues/messageQueue';

const prisma = new PrismaClient();

export const addMessage = async (content: string) => {
    try {
        await messageQueue.add('newMessage', { content });
        return content;
    } catch (error) {
        throw new Error('Erro ao adicionar mensagem: ' + error);
    }
};

export const getAllMessages = async () => {
    try {
        const messages = await prisma.message.findMany();
        return messages;
    } catch (error) {
        throw new Error('Erro ao receber mensagens: ' + error);
    }
};