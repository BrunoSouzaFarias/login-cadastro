import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ExcelUpload from "../../components/ExcelUpload/ExcelUpload";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Cadastro de Usuários</h1>
      <RegistrationForm />
      <ExcelUpload />
    </div>
  );
}

export default Home;
