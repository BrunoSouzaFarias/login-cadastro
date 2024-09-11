import React, { useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    motherName: "",
    rg: "",
    cpf: "",
    susCard: "",
    birthDate: "",
    unit: "",
    gender: "",
    nationality: "",
    phone: "",
    email: "",
    cep: "",
    address: "",
    role: "",
    councilNumber: "",
    specialty: "",
    startDate: "",
    jobRecord: "",
    endDate: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia os dados para o backend (API)
    axios.post("http://localhost:8000/register", formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));

    // Gera o CSV
    generateCSV(formData);
  };

  const generateCSV = (data) => {
    const csvData = [
      ["Nome Completo", "Nome da Mãe", "RG", "CPF", "Cartão SUS", "Data de Nascimento", "Unidade", "Sexo", "Nacionalidade", "Telefone", "Email", "CEP", "Endereço", "Função", "Número Conselho", "Especialidade", "Data Inicial", "Registro Funcional", "Data Final"],
      [data.fullName, data.motherName, data.rg, data.cpf, data.susCard, data.birthDate, data.unit, data.gender, data.nationality, data.phone, data.email, data.cep, data.address, data.role, data.councilNumber, data.specialty, data.startDate, data.jobRecord, data.endDate]
    ];

    const csv = Papa.unparse(csvData);
    
   
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "cadastro_usuarios.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>Nome Completo:</label>
      <input type="text" name="fullName" onChange={handleChange} required />
      <label>Nome da Mãe:</label>
      <input type="text" name="motherName" onChange={handleChange} required />
      <label>RG:</label>
      <input type="text" name="rg" onChange={handleChange} required />
      <label>CPF:</label>
      <input type="text" name="cpf" onChange={handleChange} required />
      <label>Número Cartão SUS:</label>
      <input type="text" name="susCard" onChange={handleChange} required />
      <label>Data de Nascimento:</label>
      <input type="date" name="birthDate" onChange={handleChange} required />
      <label>Unidade para Cadastro:</label>
      <input type="text" name="unit" onChange={handleChange} required />
      <label>Sexo:</label>
      <input type="text" name="gender" onChange={handleChange} required />
      <label>Nacionalidade:</label>
      <input type="text" name="nationality" onChange={handleChange} required />
      <label>Telefone:</label>
      <input type="text" name="phone" onChange={handleChange} required />
      <label>E-mail:</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>CEP:</label>
      <input type="text" name="cep" onChange={handleChange} required />
      <label>Endereço Residencial:</label>
      <input type="text" name="address" onChange={handleChange} required />
      <label>Função:</label>
      <input type="text" name="role" onChange={handleChange} required />
      <label>Número Conselho Profissional:</label>
      <input type="text" name="councilNumber" onChange={handleChange} required />
      <label>Especialidade:</label>
      <input type="text" name="specialty" onChange={handleChange} required />
      <label>Data Inicial do Curso:</label>
      <input type="date" name="startDate" onChange={handleChange} required />
      <label>Registro Funcional:</label>
      <input type="text" name="jobRecord" onChange={handleChange} required />
      <label>Data Final do Curso:</label>
      <input type="date" name="endDate" onChange={handleChange} required />
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;
