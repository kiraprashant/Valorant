import React from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './About'
import Contact from './Contact'
import Particpate from './Particpate'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/particapate" element={<Particpate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <footer className='footer'>
        <p style={{
          textAlign: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          margin:0
        }}>&copy; 2025 Valorant Compitetion</p>
      </footer>
  </BrowserRouter>
    </>
  )
}

export default App
