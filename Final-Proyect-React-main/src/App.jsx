import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'
import { Route, Routes } from 'react-router'
import Home from './components/pages/ItemListContainer/home'
import Contact from './components/pages/ItemListContainer/contact'
import ItemDetailContainer from './components/pages/ItemListContainer/ItemList/ItemDetailContainer'

function App() {

  return (
    <div className="container mt-4">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/products' element={<ItemListContainer></ItemListContainer>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1>Page not Found -  Error 404</h1>} />
      </Routes> 
    </div>   
  )
}


export default App
