import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div>
       <Navbar />
      <div id="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default MainLayout
