import axios from "axios";

// https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;
