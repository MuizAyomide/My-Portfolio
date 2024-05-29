import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Featured from './Components/Featured/Featured'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Featured/>
     <Project/>
     <Contact/>
    </div>
  )
}

export default App
