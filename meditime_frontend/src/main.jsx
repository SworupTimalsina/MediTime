import React from 'react'
import ReactDOM from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import AppContextProvider from './context/AppContext'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <AppContextProvider>
         <App />
    </AppContextProvider>
   
    </BrowserRouter>,
  )
