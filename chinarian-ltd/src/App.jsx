
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Approach from './pages/Approach'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        CHINARIAN<span> UK LIMITED</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/approach">Our Approach</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Chinarian UK Limited. All rights reserved.</p>
      <p>15 Hillcrest View, Leeds, LS7 4EB, UK</p>
      <p>
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
