import { Router } from "express";
import { sendMessage, getMessages } from '../controllers/messageController';

const router = Router();

/**
 * @swagger
 * /message:
 *   post:
 *     summary: Cria uma nova mensagem
 *     description: Envia uma mensagem para o Redis e armazena no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "Minha mensagem assíncrona"
 *     responses:
 *       201:
 *         description: Mensagem criada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", sendMessage);
/**
 * @swagger
 * /message:
 *   get:
 *     summary: Obtém uma mensagem
 *     description: Recupera uma mensagem do banco de dados.
 *     responses:
 *       200:
 *         description: Mensagem recuperada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", getMessages);

export default router;
