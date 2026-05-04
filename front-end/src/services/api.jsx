import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    'accept': 'application/json',
    // O Vite usa import.meta.env para acessar as variáveis
    'x-cg-demo-api-key': import.meta.env.VITE_CG_API_KEY 
  }
});

export default api;