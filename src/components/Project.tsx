import "../styles/Projects.css"
import ProjectCard from "./ProjectCard"

type ProjectsProps = {
  setActiveSection: (section: string) => void
}

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const projects = [
    {
      id: 1,
      title: "Swype Website",
      description: "A fully responsive e-commerce platform built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://tech-birds.vercel.app/",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication.",
      image: "https://via.placeholder.com/600x400 ",
      tags: ["React", "Firebase", "CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A clean and modern portfolio website template for developers.",
      image: "https://via.placeholder.com/600x400 ",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays forecast data from multiple sources.",
      image: "https://via.placeholder.com/600x400 ",
      tags: ["React", "API", "Chart.js"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (

    <section className="projects-section" onClick={() => setActiveSection('projects')}>
      <h2 className="section-title">Mijn Projecten</h2>

      <div className="projects-filter">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Web Development</button>
        <button className="filter-btn">UI/UX Design</button>
        <button className="filter-btn">Mobile Apps</button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )

}
export default Projects