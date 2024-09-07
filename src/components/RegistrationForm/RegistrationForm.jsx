import React, { useState, useEffect } from "react";
import axios from "axios";
import unidades from "../../unidades.json";
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

  const [unidadesList, setUnidadesList] = useState([]);

  useEffect(() => {
    // Se estiver usando um arquivo JSON estático, você pode carregar diretamente.
    // Caso contrário, você pode buscar da API.
    setUnidadesList(unidades); // Para carregar a partir do arquivo JSON

    // Se estiver usando uma API, substitua o código acima pelo seguinte:
    /*
    const fetchUnidades = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/unidades");
        setUnidadesList(response.data);
      } catch (error) {
        console.error("Erro ao buscar as unidades", error);
      }
    };

    fetchUnidades();
    */
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/register", formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>Unidade para Cadastro:</label>
      <select name="unit" value={formData.unit} onChange={handleChange} required>
        <option value="">Selecione uma unidade</option>
        {unidadesList.map((unidade) => (
          <option key={unidade.id} value={unidade.id}>
            {unidade.nome}
          </option>
        ))}
      </select>

      <label>Nome Completo:</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      <label>Nome da Mãe:</label>
      <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
      <label>RG:</label>
      <input type="text" name="rg" value={formData.rg} onChange={handleChange} required />
      <label>CPF:</label>
      <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
      <label>Número Cartão SUS:</label>
      <input type="text" name="susCard" value={formData.susCard} onChange={handleChange} required />
      <label>Data de Nascimento:</label>
      <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
      <label>Sexo:</label>
      <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      <label>Nacionalidade:</label>
      <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
      <label>Telefone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      <label>E-mail:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>CEP:</label>
      <input type="text" name="cep" value={formData.cep} onChange={handleChange} required />
      <label>Endereço Residencial:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      <label>Função:</label>
      <input type="text" name="role" value={formData.role} onChange={handleChange} required />
      <label>Número Conselho Profissional:</label>
      <input type="text" name="councilNumber" value={formData.councilNumber} onChange={handleChange} required />
      <label>Especialidade:</label>
      <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} required />
      <label>Data Inicial do Curso:</label>
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      <label>Registro Funcional:</label>
      <input type="text" name="jobRecord" value={formData.jobRecord} onChange={handleChange} required />
      <label>Data Final do Curso:</label>
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  );
}

export default RegistrationForm;
