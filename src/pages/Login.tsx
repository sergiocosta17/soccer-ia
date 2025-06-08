import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Login.css';

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) return setError('E-mail inválido.');
    if (password.length < 6) return setError('A senha deve ter pelo menos 6 caracteres.');
    setError('');
    navigate('/home', { replace: true });
  };

  return (
    <div className="loginPage">
      <div className="formContainer">
        <h2 className="loginTitle">Login</h2>
        <p className="subtitle">Preencha seus dados corretamente</p>
        <form className="formLogin" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <p className="error-message" role="alert">{error}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;