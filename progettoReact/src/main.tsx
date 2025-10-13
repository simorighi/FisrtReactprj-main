/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import CircularGallery from './components/Gallery/CircularGallery.tsx'

/* createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
      <header>
        <Navbar/>
      </header>
        <App />
        <CircularGallery/>
      </BrowserRouter>
    </React.StrictMode>,
  )
