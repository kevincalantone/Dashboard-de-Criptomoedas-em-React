import React from 'react'
import { Link } from 'react-router-dom' // Importante para a navegação
import { currencyFormatter } from '../utils/formatter' // Usando seu formatador

const CoinCard = ({ coin, isFav, onFav }) => {
  return (
    <div className="coin-card">
      {/* Envolvemos a imagem e o nome com um Link para a página de detalhes */}
      <Link to={`/coin/${coin.id}`} className="coin-link-wrapper">
        <img src={coin.image} alt={coin.name} className='coin-image' />
        
        <div className="coin-info">
          <h3 className='coin-name'>{coin.name}</h3>
       
          <p className='coin-price'>{currencyFormatter(coin.current_price)}</p>
        </div>
      </Link>
      
      <button 
        className='fav-button'
        onClick={(e) => {
          e.preventDefault(); // Evita que o clique no botão abra a página de detalhes
          onFav();
        }}
        style={{ filter: isFav ? 'grayscale(0)' : 'grayscale(1)', cursor: 'pointer' }}
      >
        ⭐
      </button>
    </div>
  )
}

export default CoinCard