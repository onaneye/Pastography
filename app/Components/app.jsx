import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Services from './Services';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Contact from './Contact';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS automatically

const app = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Services/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default app
