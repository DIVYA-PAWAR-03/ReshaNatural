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
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import ThemeToggle from "./javascript/ThemeToggle";



function App() {
  

  return (
    <>
    <Header/>
    <ThemeToggle/>
      <Routes>
        
        <Route path="/" element={<Mainpage />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/company" element = {<Company />} />
        <Route path='/homepage' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/motive' element={<Motive/>}/>
        <Route path='/contact' element = {<ContactUs/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
