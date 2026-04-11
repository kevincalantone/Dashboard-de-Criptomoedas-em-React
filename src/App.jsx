import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favories from './pages/Favorites'
import CoinDetails from './pages/CoinDetails'
import Navbar from './components/Navbar'
import './styles/global.css'


function App() {


  return (
      <>
      <BrowserRouter>
          {/* A Navbar fica fora das Routes para aparecer em todas as páginas */}
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/coin/:id' element={<Datails/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
