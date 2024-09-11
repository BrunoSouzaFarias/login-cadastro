import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="introduction">
        <h2>De fato, estamos prontos para estabelecer novos padrões de cuidados</h2>
        <p>
          O nosso compromisso é ser uma força transformadora, utilizando o que há de mais moderno para criar
          um sistema de saúde mais conectado e competente.
        </p>
        <p>
          Acreditamos que, ao oferecer tais soluções com um suporte excepcional, podemos fazer a diferença na
          vida das pessoas.
        </p>
      </section>

      <section className="values-section">
        <div className="value-box">
          <h3>Missão</h3>
          <p>
            Nosso propósito é transformar a saúde pública brasileira, oferecendo um sistema de gestão inteligente e
            prático, além de realizar consultorias de qualidade, sendo uma resposta para os pacientes e profissionais
            de saúde.
          </p>
        </div>

        <div className="value-box">
          <h3>Valores</h3>
          <ul>
            <li>Integridade;</li>
            <li>Excelência;</li>
            <li>Tecnologia e inovação;</li>
            <li>Cuidado com a sociedade.</li>
          </ul>
        </div>

        <div className="value-box">
          <h3>Visão</h3>
          <p>
            Ser a empresa de sistema integrado à saúde pública que entrega os melhores treinamentos, o melhor atendimento
            e consultorias que trazem melhorias rápidas e eficazes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
