import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    <h1>Your Name</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I'm [Your Name], a student studying [your field]. I enjoy building cool things and learning new skills.</p>
  </section>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>Project One</h3>
      <p>Description of your awesome project. Mention tools used and what you learned.</p>
    </div>
    <div className="project">
      <h3>Project Two</h3>
      <p>Brief description here. This shows off another skill or thing you've worked on.</p>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Git & GitHub</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile " target="_blank">linkedin.com/in/yourprofile</a></p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Your Name</p>
  </footer>
);

export default App;