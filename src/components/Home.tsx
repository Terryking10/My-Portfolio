import "../styles/Home.css"

type HomeProps = {
  setActiveSection: (section: string) => void
}

const Home = ({ setActiveSection }: HomeProps) => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="hero-title">Terry Boateng</h1>
          <h2 className="hero-subtitle">Fullstack Developer</h2>
          <p className="hero-description">I build exceptional and accessible digital experiences for the web.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn" onClick={() => setActiveSection("projects")}>
                View My Work
            </a>
            <a href="#projects" className="btn primary-btn" onClick={() => setActiveSection("projects")}>
                Contact Me
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-container">
            <img src="https://via.placeholder.com/400x500 " alt="Terry Boateng" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home