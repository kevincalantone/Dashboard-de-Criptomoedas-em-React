// A linha ou card com as informações da moeda.

import React from 'react'

const CoinCard = ({coin, isFav, onFav}) => {
  return (
   <div className="coin-card">
    <img src={coin.image} alt={coin.name} className='coin-image' />
   
    <div className="coin-info">
      <h3 className='coin-name'>{coin.name}</h3>
      <p className='coin-price'> U$ {coin.current_price.toLocaleString()}</p>
    </div>
   
    <button className='fav-button'
      onClick={onFav}
      style={{filter: isFav ? 'grayscale(0)' : 'grayscale(1)', cursor: 'pointer'}}
    >⭐
    </button>
   </div>
  )
}

export default CoinCard