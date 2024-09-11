import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    // Aqui você pode adicionar a lógica para enviar o formulário para o backend
  };

  return (
    <div className="contact-page">
      <div className="contact-message">
        <h2>Como podemos ajudar?</h2>
        <p>
          Valorizamos cada oportunidade de interagir com você. Seja para esclarecer dúvidas, 
          oferecer suporte ou avaliar as suas sugestões, a nossa equipe está pronta para atendê-lo.
        </p>
        <p>
          Preencha o formulário. O nosso time responderá o mais breve possível.
        </p>
        <p>
          Se preferir, entre em contato via e-mail <strong>contato@libertyti.com.br</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
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
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
