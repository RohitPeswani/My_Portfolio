import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      
       
    </>
  )
}

export default App
