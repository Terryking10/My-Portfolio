import "../styles/Home.css"


type HomeProps = {
  setActiveSection: (section: string) => void
}

const Home = ({ setActiveSection }: HomeProps) => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2 className="hero-subtitle">Fullstack Developer</h2>
          <p className="hero-description">Technisch nieuwsgierig, design-bewust, en altijd op zoek naar betere manieren om dingen werkend te krijgen. </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn" onClick={() => setActiveSection("projects")}>
                View My Work
            </a>
            <a href="#contact" className="btn primary-btn" onClick={() => setActiveSection("contact")}>
                Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-container">
            <img src="/assets/" alt="Terry Boateng" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home