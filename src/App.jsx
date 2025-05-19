import { useState,useRef } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Reasons from './Reasons'
import Process from './Process'
import Testimonial from './Testimonial'
import { testimonial } from './testimonial.json'
import Form from './Form'
import Footer from './Footer'
import './App.css'

function App() {
  const processRef = useRef(null)
  const requestQuoteRef = useRef(null)

  return (
    <>
        <Header processRef={processRef} requestQuoteRef={requestQuoteRef}/>
        <Hero />
        <About />
        <Reasons />
        <Process ref={processRef}/>
        <Testimonial data={testimonial}/>
        <Form ref={requestQuoteRef} />
        <Footer />
    </>
  )
}

export default App
