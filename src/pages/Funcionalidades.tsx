import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import '../styles/pages/Funcionalidades.css';

const Funcionalidades = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap animate-entry">
        <section className="funcionalidades">
          <div className="container">
            <SectionTitle
              title="Funcionalidades"
              description="Aqui você encontra todas as funcionalidades incríveis do "
              highlight="Soccer IA"
            />
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
      </main>
      <Footer />
    </div>
  );
};

export default Funcionalidades;