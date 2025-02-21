import { Request, Response } from 'express';
import { getAllMessages, addMessage } from '../services/messageService';

export const sendMessage = async (req: Request, res: Response) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const message = await addMessage(content);
    return res.status(201).json({ message });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create message' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await getAllMessages();
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};