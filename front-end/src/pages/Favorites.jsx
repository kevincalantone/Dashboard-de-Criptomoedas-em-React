import { useState, useEffect } from 'react'
import api from '../services/api' // Importa a instância configurada
import CoinCard from '../components/CoinCard'
import Loader from '../components/Loader'

function Favorites() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('@cripto-favs')
    return saved ? JSON.parse(saved) : []
  })

  // Busca os dados da API usando Axios
  useEffect(() => {
    async function loadFavoriteData() {
      try {
        setLoading(true)
        const response = await api.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false
          }
        })
        setData(response.data)
        setError(false)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadFavoriteData()
  }, [])

  useEffect(() => {
    localStorage.setItem('@cripto-favs', JSON.stringify(favorites))
  }, [favorites])

  const handleFav = (id) => {
    setFavorites(favorites.filter(fav => fav !== id))
  }

  // Filtra as moedas que estão na lista de favoritos do localStorage
  const favoriteCoins = data?.filter(coin => favorites.includes(coin.id))

  if (loading) return <Loader />
  if (error) return <h1 className="error">Erro ao carregar favoritos</h1>

  return (
    <main className="container">
      <h1 className="title">Meus Favoritos</h1>

      {favoriteCoins?.length > 0 ? (
        <div className="coin-grid">
          {favoriteCoins.map(coin => (
            <CoinCard
              key={coin.id}
              coin={coin}
              isFav={true}
              onFav={() => handleFav(coin.id)}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '50px', color: '#888' }}>
          Você ainda não favoritou nenhuma moeda.
        </p>
      )}
    </main>
  )
}

export default Favorites