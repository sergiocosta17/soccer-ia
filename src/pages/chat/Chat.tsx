import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Chat.css';


type Message = {
  from: 'user' | 'Soccer IA';
  text: string;
};

type ChatHistoryItem = {
  question: string;
  answer: string;
  createdAt: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const loadHistory = () => {
    fetch('http://localhost:3000/historico')
      .then(res => res.json())
      .then((data: ChatHistoryItem[]) => {
        const historyMessages: Message[] = [];
        data.reverse().forEach(item => {
          historyMessages.push({ from: 'user', text: item.question });
          historyMessages.push({ from: 'Soccer IA', text: item.answer });
        });
        setMessages(historyMessages);
      });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: input }]);

    try {
      const res = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages(prev => [...prev, { from: 'Soccer IA', text: data.answer }]);
      setInput('');
    } catch (error) {
      setMessages(prev => [...prev, { from: 'Soccer IA', text: 'Erro ao se comunicar com o servidor.' }]);
    }
  };

  const clearConversation = () => {
    setMessages([]);
  };

  const deleteHistory = async () => {

    try {

  const res = await fetch('http://localhost:3000/historico', { method: 'DELETE' });

    if (res.ok) {
      setMessages([]);
    } else {
      alert('Falha ao apagar histórico no servidor.');
    }
    } catch (error) {
      alert('Erro ao se comunicar com o servidor:');
    }
};

  return (
    <div className="page-container">
      <div className="back-button">
          <Link to="/home" className="back-link">&#8592;</Link>
      </div>
      <div className="content-wrap chat-content-wrap">
        <h1 className="animated-title">Soccer IA - Chat</h1>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.from === 'user' ? 'user' : 'bot'}`}>
              <b>{msg.from === 'user' ? 'Você' : 'Soccer IA'}:</b> {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            placeholder="Digite sua pergunta"
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            className="chat-input"
          />
          <button onClick={sendMessage} className="btn-send">
            Enviar
          </button>
        </div>
        <div className="chat-buttons">
          <button onClick={clearConversation} className="btn-action">
            Limpar Conversa
          </button>
          <button onClick={loadHistory} className="btn-action">
            Ver Histórico
          </button>
          <button onClick={deleteHistory} className="btn-action delete">
            Apagar Histórico
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;