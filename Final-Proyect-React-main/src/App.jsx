import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'
import { Route, Routes } from 'react-router'
import Home from './components/pages/ItemListContainer/home'
import Contact from './components/pages/ItemListContainer/contact'

function App() {

  return (
    <div className="container mt-4">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/products' element={<ItemListContainer  text="¡Bienvenidos! a la mejor Tienda Online de Tecnología"></ItemListContainer>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
    </div>   
  )
}

export default App
