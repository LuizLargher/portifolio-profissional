import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import About from '../components/About.jsx'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Project from '../components/Project.jsx'
import Skill from '../components/Skill.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero />
    <About />
    <Project />
    <Skill />
    <Contact />
    <Footer />
  </StrictMode>,
)
