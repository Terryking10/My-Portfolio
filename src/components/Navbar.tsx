"use client"

import { useState } from "react"
import "../styles/Navbar.css"

const Navbar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo" onClick={() => handleNavClick("home")}>
          <h2>Terry Boateng</h2>
        </div>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
              <button onClick={() => handleNavClick("home")}>Home</button>
            </li>
            <li className={`nav-item ${activeSection === "about" ? "active" : ""}`}>
              <button onClick={() => handleNavClick("about")}>About</button>
            </li>
            <li className={`nav-item ${activeSection === "projects" ? "active" : ""}`}>
              <button onClick={() => handleNavClick("projects")}>Projects</button>
            </li>
            <li className={`nav-item ${activeSection === "contact" ? "active" : ""}`}>
              <button onClick={() => handleNavClick("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
