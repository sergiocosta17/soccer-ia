import { Container } from 'react-bootstrap';
import './Sobre.css';

const Sobre = () => {
  return (
    <>
      <section id="sobre" className="sobre">
        <div className="container">
          <h2 className="title">Sobre</h2>
          <p className="description">
            O <span className="highlight">Soccer IA</span> é uma plataforma inovadora que utiliza inteligência artificial para
            ajudar jogadores e treinadores a melhorar suas habilidades e estratégias no futebol.
          </p>
          <p className="description">
            Nosso objetivo é transformar a forma como o futebol é analisado e jogado, combinando tecnologia e
            paixão pelo esporte.
          </p>

          <div className="about-cards">
            <div className="about-card">
              <h3>🎯 Nossa Missão</h3>
              <p>Promover o desenvolvimento de jogadores e equipes com dados e análises de ponta.</p>
            </div>
            <div className="about-card">
              <h3>💡 Nossa Visão</h3>
              <p>Revolucionar o futebol através do poder da IA e das estatísticas em tempo real.</p>
            </div>
            <div className="about-card">
              <h3>🤝 Valores</h3>
              <p>Inovação, paixão pelo futebol e compromisso com a excelência.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <Container>
          <small>&copy; {new Date().getFullYear()} Soccer IA. Todos os direitos reservados.</small>
        </Container>
      </footer>
    </>
  );
};

export default Sobre;