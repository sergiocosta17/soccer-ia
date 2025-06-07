import express from 'express';
import cors from 'cors';
import axios from 'axios';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import Chat from './models/ChatModel.js';
import historicoRoutes from './routes/ChatRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          { parts: [{ text: message }] }
        ]
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const aiAnswer = geminiResponse.data.candidates[0].content.parts[0].text;

    const chatEntry = new Chat({ question: message, answer: aiAnswer });
    await chatEntry.save();

    res.json({ answer: aiAnswer });
  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao buscar resposta da IA' });
  }
});

app.get('/historico', async (req, res) => {
  try {
    const historico = await Chat.find().sort({ createdAt: -1 });
    res.json(historico);
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    res.status(500).json({ error: 'Erro ao buscar histórico' });
  }
});

app.use('/historico', historicoRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));