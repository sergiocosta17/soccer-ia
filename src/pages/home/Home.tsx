 import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  navigate('/', { replace: true });
  };

  return (
    <div className="page-container">
      <header className="navbar shadow-sm">
        <Container className="navbar-container">
          <Link to="/home" className="navbar-brand">
            Soccer IA ⚽
          </Link>
          <nav className="nav-links">
            <Link to="/funcionalidades" className="nav-link">Funcionalidades</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
          </nav>
          <button
            className="btn-logout"
            onClick={handleLogout}
            aria-label="Logout"
          >
            Sair
          </button>
        </Container>
      </header>

      <main className="content-wrap animate-entry">
        <h1 className="animated-title">Bem-vindo ao Soccer IA</h1>
        <p>
          Explore as funcionalidades e revolucione seu jogo com inteligência artificial.
        </p>
        <Link to="/chat" className="btn-chat animated-ball">
          Acessar Chat
        </Link>
      </main>

      <footer className="footer">
        <Container>
          <small>&copy; {new Date().getFullYear()} Soccer IA. Todos os direitos reservados.</small>
        </Container>
      </footer>
    </div>
  );
};

export default Home;