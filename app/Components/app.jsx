import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Services from './Services';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS automatically

const app = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
    </>
  )
}

export default app
