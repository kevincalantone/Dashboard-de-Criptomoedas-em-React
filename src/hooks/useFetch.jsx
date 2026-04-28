import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3${url}`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            // Sua chave configurada aqui:
            'x-cg-demo-api-key': 'CG-EFgo5EnGP2HtuUcisobSNnht'
          }
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;