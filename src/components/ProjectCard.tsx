import "../styles/ProjectCard.css"

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, tags, demoLink} = project

  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-overlay">
          <div className="project-links">
            <a href={demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
