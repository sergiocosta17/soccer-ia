import { Container } from 'react-bootstrap';
import '../styles/components/Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <small>&copy; {new Date().getFullYear()} Soccer IA. Todos os direitos reservados.</small>
    </Container>
  </footer>
);

export default Footer;