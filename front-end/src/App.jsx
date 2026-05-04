import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import CoinDetails from './pages/CoinDetails'
import Navbar from './components/Navbar'
import './styles/global.css'


function App() {


  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/coin/:id' element={<CoinDetails/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
