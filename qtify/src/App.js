import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'

const App = () => {
 
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Section/>
    </div>
  )
}

export default App