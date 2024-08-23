import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
// import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes> */}
    </div>
  )
}

export default App