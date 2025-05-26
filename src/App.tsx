import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './login/Login';
import Home from './home/Home';

function App() {

  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App