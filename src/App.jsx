import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Reasons from './Reasons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Hero />
        <About />
        <Reasons />
    </>
  )
}

export default App
