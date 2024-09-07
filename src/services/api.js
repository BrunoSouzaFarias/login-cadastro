import axios from "axios";

const API_URL = "http://localhost:8000";

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const uploadExcel = (excelData) => {
  return axios.post(`${API_URL}/upload`, excelData);
};

