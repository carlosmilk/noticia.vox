import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import MaisTocadas from './components/MaisTocadas.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HeroSection/>
    <MaisTocadas/>
    <Propagandas/>
  </StrictMode>,
)