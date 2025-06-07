import express from 'express';
import Chat from '../models/ChatModel.js';

const router = express.Router();

router.delete('/', async (req, res) => {
  try {
    await Chat.deleteMany({});
    res.status(200).json({ message: 'Histórico apagado com sucesso!' });
  } catch (error) {
    console.error('Erro ao apagar histórico:', error);
    res.status(500).json({ message: 'Erro ao apagar histórico.' });
  }
});

export default router;