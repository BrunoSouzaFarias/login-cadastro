import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio de dados
    console.log("Form Data:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contato</h2>
      
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <label htmlFor="message">Mensagem</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
