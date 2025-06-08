import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import '../styles/pages/Sobre.css';

const Sobre = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap animate-entry">
        <section className="sobre">
          <div className="container">
            <SectionTitle
              title="Quem somos"
              description="O Soccer IA é uma plataforma inovadora que utiliza inteligência artificial para ajudar jogadores e treinadores a melhorar suas habilidades e estratégias no futebol."
            />
            <p className="description">
              Nosso objetivo é transformar a forma como o futebol é analisado e jogado, combinando tecnologia e paixão pelo esporte.
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
            </div>
            <div className="torcedor-benefits">
              <h3>🎉 Benefícios para Torcedores</h3>
              <p>
                O <strong>Soccer IA</strong> também transforma a experiência dos torcedores! Tenha acesso a:
              </p>
              <ul>
                <li>📊 Estatísticas em tempo real para acompanhar seu time favorito</li>
                <li>📅 Calendário de jogos e resultados atualizados</li>
                <li>💡 Conteúdos exclusivos com análises e previsões da IA</li>
                <li>🤖 Interação direta com o chat inteligente para tirar dúvidas sobre futebol</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;