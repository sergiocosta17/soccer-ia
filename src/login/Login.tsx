import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (_email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(_email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('E-mail inválido.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setError('');
    navigate('/home');
  };

  return (
    <div className="loginPage">
      <div className="formContainer">
        <h2 className='loginTitle'>Login</h2>
        <p className="subtitle">Preencha seus dados corretamente</p>
        <form className='formLogin' onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;