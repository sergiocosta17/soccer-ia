import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import '../styles/pages/Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setFeedback('Por favor, preencha todos os campos.');
      return;
    }
    setFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="content-wrap animate-entry">
        <section className="contato">
          <div className="contato-container">
            <SectionTitle
              title="Contato"
              description="Quer entrar em contato conosco? Envie um e-mail para "
              highlight="contato@socceria.com"
            />
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows={4} value={formData.mensagem} onChange={handleChange} required />
              </div>
              <button type="submit" className="submit-btn">Enviar</button>
            </form>
            {feedback && <p className="feedback">{feedback}</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;