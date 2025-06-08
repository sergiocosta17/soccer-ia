import { Container } from 'react-bootstrap';
import './Funcionalidades.css';

const Funcionalidades = () => {
  return (
    <>
      <section id="funcionalidades" className="funcionalidades">
        <div className="container">
          <h2 className="title">Funcionalidades</h2>
          <p className="description">
            Aqui você encontra todas as funcionalidades incríveis do <span className="highlight">Soccer IA</span>:
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>💬 Chat Interativo</h3>
              <p>Converse em tempo real com nossa IA para tirar dúvidas, discutir estratégias e muito mais.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Análise de Partidas</h3>
              <p>Obtenha estatísticas detalhadas e análises sobre partidas e jogadores em tempo real.</p>
            </div>
            <div className="feature-card">
              <h3>⚽ Estratégias Personalizadas</h3>
              <p>Receba recomendações de estratégias baseadas em IA para melhorar seu desempenho em campo.</p>
            </div>
            <div className="feature-card">
              <h3>🧠 Aprendizado Contínuo</h3>
              <p>Nossa IA aprende continuamente com as tendências e dados do futebol para te manter sempre atualizado.</p>
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

export default Funcionalidades;