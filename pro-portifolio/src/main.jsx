import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import About from '../components/About.jsx'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Exp from '../components/Exp.jsx'
import Project from '../components/Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero />
    <About />
    <Project />
    <Exp />
  </StrictMode>,
)
