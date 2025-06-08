import React, { useState } from 'react';
import './Contato.css';
import { Container } from 'react-bootstrap';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <>
      <section id="contato" className="contato">
        <div className="contato-container">
          <h2 className="contato-title">Contato</h2>
          <p className="contato-description">
            Quer entrar em contato conosco? Envie um e-mail para{' '}
            <a href="mailto:contato@socceria.com" className="contato-email-link">contato@socceria.com</a> ou preencha o formulário abaixo:
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Enviar</button>
          </form>

          {feedback && <p className="feedback">{feedback}</p>}
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

export default Contato;