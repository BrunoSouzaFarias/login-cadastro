import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Sobre nós</h4>
          <p>Somos uma empresa focada em soluções tecnológicas inovadoras para saúde pública.</p>
        </div>
        <div className="footer-column">
          <h4>Links úteis</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Serviços</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="/about">Sobre nós</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contato</h4>
          <p>Email: contato@libertyhealth.com.br</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="footer-column">
          <h4>Redes sociais</h4>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Liberty Health. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
