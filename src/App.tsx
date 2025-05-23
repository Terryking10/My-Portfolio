"use client"

import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Project"
import Contact from "./components/Contact"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home  setActiveSection={setActiveSection} />
      case "about":
        return <About />
      case "projects":
        return <Projects setActiveSection={setActiveSection} />
      case "contact":
        return <Contact />
      default:
        return <Home setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">{renderSection()}</main>
    </div>
  )
}

export default App
