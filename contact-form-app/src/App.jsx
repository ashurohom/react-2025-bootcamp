import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'  
import './App.css'
import Home from './Home'
import Contact from './Contact'

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
