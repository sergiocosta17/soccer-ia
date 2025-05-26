import { Button, Container, Nav, Navbar } from "react-bootstrap";
import './home.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar bg="light" expand="lg" className="shadow-sm py-3">
          <Container>
            <Navbar.Brand href="/home" className="fw-bold navbar-brand-custom">
              Soccer IA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#funcionalidades">Funcionalidades</Nav.Link>
                <Nav.Link href="#sobre">Sobre</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
              </Nav>
              <Button variant="secondary" href="/" className="botton-logout">
                Logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <footer className="bg-light text-center text-muted py-4 border-top">
        <Container>
          <small>&copy; {new Date().getFullYear()} Soccer IA. Todos os direitos reservados.</small>
        </Container>
      </footer>
    </div>
  );
};

export default Home;