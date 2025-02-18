import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route ,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Mainpage from './pages/Mainpage'
import Footer from './components/Footer'
import Motive from './pages/Motive'
import Company from './pages/Company'
import Home from './pages/Home'



function App() {
  

  return (
    <>
    <Header/>
    
      <Routes>
        
        <Route path="/" element={<Mainpage />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/company" element = {<Company />} />
        <Route path='/homepage' element = {<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
