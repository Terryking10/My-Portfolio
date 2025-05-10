import "../styles/Resume.css"

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      duration: "2016 - 2018",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      duration: "2012 - 2016",
      description: "Graduated with honors. Focused on software engineering and web development.",
    },
  ]

  const experience = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "2020 - Present",
      description:
        "Lead the frontend development team in creating responsive web applications. Implemented modern UI/UX practices and improved performance by 40%.",
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Digital Solutions LLC",
      duration: "2018 - 2020",
      description:
        "Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect interfaces.",
    },
    {
      id: 3,
      position: "Web Developer Intern",
      company: "StartUp Hub",
      duration: "2017 - 2018",
      description:
        "Assisted in developing web applications using React. Participated in code reviews and agile development processes.",
    },
  ]

  return (
    <section className="resume-section">
      <h2 className="section-title">My Resume</h2>

      <div className="resume-download">
        <p>Download my full resume for more details about my experience and skills.</p>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>

      <div className="resume-content">
        <div className="resume-column">
          <h3 className="resume-subtitle">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.duration}</span>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-column">
          <h3 className="resume-subtitle">Experience</h3>
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.duration}</span>
                  <h4 className="timeline-title">{item.position}</h4>
                  <p className="timeline-institution">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
