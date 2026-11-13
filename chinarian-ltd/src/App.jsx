import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
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
        CHINARIAN<span> AI LIMITED</span>
      </Link>

      <nav>
  <NavLink to="/" end>Home</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/services">Services</NavLink>
  <NavLink to="/approach">Our Approach</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Chinarian AI limited. All rights reserved.</p>
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
