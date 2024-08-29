import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import AlbumDetail from './components/AlbumDetail/AlbumDetail'

const App = () => {
 
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/slug/:slugname' element = {<AlbumDetail/>}/>
      </Routes>
    </div>
  )
}

export default App