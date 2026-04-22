//Onde as moedas salvas pelo usuário aparecem

import {useState, useEffect} from 'react'
import CoinCard from '../components/CoinCard'
import useFetch from '../hooks/useFetch'

const Favorites = () => {
  
  const {data, loading, error} = useFetch(
    '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )

    //ler os favoritos do localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('@cripto-favs')
    return saved ? JSON.parse(saved) : []
  })


  // Função para remover dos favoritos diretamente desta página
  function handleRemoveFav(id){
    const updatededFav = favorites.filter(fav => fav !== id)
    setFavorites(updatededFav)
    localStorage.setItem('@cripto-favs', JSON.stringify(updatededFav))
  }

  // Filttrar os dados da API para mostrar apenas os favoritados
  const favoriteCoins = data?.filter(coin => favorites.includes(coin.id))

  if (loading) return <h1 className='loader'>Carregando seus favoritos</h1>
  if (error) return <h1 className='error'>Erro ao carregar dados</h1>
   
  return (
    <main className='container'>
        <h1 className='title'> meus Favoritos</h1>

        <div className="coin-grid">
          {favoriteCoins  && favoriteCoins.length > 0 ? (
            favoriteCoins.map(coin => (
              <CoinCard
                key={coin.id}
                coin={coin}
                isFav={true}
                onFav={() => handleRemoveFav(coin.id)}
              />
            )) 
          ) : (
            <p className='empty-massage'>Ainda não tens moedas favoritada</p>
          
          )}
        </div>
    </main>
  )
}

export default Favorites