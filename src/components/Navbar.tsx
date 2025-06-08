import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/', { replace: true });

  return (
    <header className="navbar shadow-sm">
      <Container className="navbar-container">
        <Link to="/home" className="navbar-brand">Soccer IA ⚽</Link>
        <nav className="nav-links">
          <Link to="/funcionalidades" className="nav-link">Funcionalidades</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>
        <button className="btn-logout" onClick={handleLogout}>Sair</button>
      </Container>
    </header>
  );
};

export default Navbar;