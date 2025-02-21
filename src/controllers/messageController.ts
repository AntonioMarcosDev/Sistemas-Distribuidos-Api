import { Request, Response } from 'express';
import { messageQueue } from '../queues/messageQueue';

export const sendMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  await messageQueue.add('newMessage', { content });

  return res.status(202).json({ message: 'Message sent to queue' });
};