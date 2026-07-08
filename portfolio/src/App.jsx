import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Portfolio from "./Components/Portfolio"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import React from 'react'
import Projects from "./Components/Projects"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Portfolio />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Skills' element={<Skills />} />
      <Route path='Projects' element={<Projects />} />

    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
