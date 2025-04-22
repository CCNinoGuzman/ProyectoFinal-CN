import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div className="container mt-4">
      <NavBar></NavBar>
      <ItemListContainer  text="¡Bienvenidos! a la mejor Tienda Online de Tecnología"></ItemListContainer >
    </div>   
  )
}

export default App
