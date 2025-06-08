import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';
import Funcionalidades from './pages/components/Funcionalidades';
import Sobre from './pages/components/Sobre';
import Contato from './pages/components/Contato';
import './pages/components/Funcionalidades.css';
import './pages/components/Sobre.css';
import './pages/components/Contato.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/funcionalidades" element={<Funcionalidades />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
