// back-end/server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Rota para buscar as criptomoedas
app.get('/api/coins', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false
      },
      headers: {
        // A chave agora vem do .env do back-end com o novo nome
        'x-cg-demo-api-key': process.env.COINGECKO_API_KEY 
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados da API' });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));