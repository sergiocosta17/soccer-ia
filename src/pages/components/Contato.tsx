import './Contato.css';

const Contato = () => {
  return (
    <section id="contato" className="section">
      <h2>Contato</h2>
      <p>
        Quer entrar em contato conosco? Envie um e-mail para{' '}
        <a href="mailto:contato@socceria.com">contato@socceria.com</a> ou preencha o formulário abaixo:
      </p>
      <form>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" id="nome" name="nome" /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="mensagem">Mensagem:</label><br />
        <textarea id="mensagem" name="mensagem" rows={4}></textarea><br />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;