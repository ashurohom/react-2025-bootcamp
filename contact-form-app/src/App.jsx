import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'  
import './App.css'

function Home() {
  return <h2>Home</h2>
} 

function Contact() {
  return <h2>Contact</h2>
}


function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
