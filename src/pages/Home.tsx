import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap animate-entry">
        <h1 className="animated-title">Bem-vindo ao Soccer IA</h1>
        <p>Explore as funcionalidades e revolucione seu jogo com inteligência artificial.</p>
        <Link to="/chat" className="btn-chat animated-ball">Acessar Chat</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;