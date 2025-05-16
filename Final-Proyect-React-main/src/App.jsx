import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'
import { Route, Routes } from 'react-router'
import Home from './components/pages/ItemListContainer/home'
import Contact from './components/pages/ItemListContainer/contact'
import ItemDetailContainer from './components/pages/ItemListContainer/ItemList/ItemDetailContainer'
import Cart from './components/pages/ItemListContainer/cart'
import ItemListContainerAndroid from './components/pages/ItemListContainer/ItemList/temListContainerAnd'
import ItemDetailContainerApple from '../src/components/pages/ItemListContainer/ItemList/ItemDetailContainerApple'
import Checkout from './components/pages/Checkout'
function App() {

  return (
    <>
     <NavBar></NavBar>
    <div className="container mt-4">
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/products' element={<ItemListContainer></ItemListContainer>} />
        <Route path='category/:category' element={<ItemListContainer></ItemListContainer>} />
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkout></Checkout>}/>
        <Route path="*" element={<h1>Page not Found -  Error 404</h1>} />
      </Routes> 
    </div>  
    </> 
  )
}


export default App
