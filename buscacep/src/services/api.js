import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;

// Configuracao do axios para fazer requisicoes a API do ViaCEP
