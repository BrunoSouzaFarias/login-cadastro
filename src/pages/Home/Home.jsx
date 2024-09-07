import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import ExcelUpload from "../../components/ExcelUpload/ExcelUpload";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Cadastro de Usuários</h1>
      <SpeedInsights />
      <RegistrationForm />
      <ExcelUpload />
    </div>
  );
}

export default Home;
