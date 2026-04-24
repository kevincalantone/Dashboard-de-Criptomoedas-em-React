//Onde o usuário digita para filtrar.
import React from 'react'

const SearchBar = ({value, onChange}) => {
  return(
    <div className="search-container">
      <input 
      type="text"
      placeholder='Buscar moeda (ex: Bitcoin...)'
      value={value}
      onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default SearchBar