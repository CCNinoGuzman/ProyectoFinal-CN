import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ContextProvider from './components/context/cointext.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider> 
    </BrowserRouter>
)
