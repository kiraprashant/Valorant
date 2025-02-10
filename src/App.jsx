import React from 'react'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
