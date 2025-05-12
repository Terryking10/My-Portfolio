import "../styles/About.css"
import SkillItem from "./SkillItem"

const About = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "TypeScript", iconName: "fileCode" },
        { name: "C#", iconName: "code" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "Next.js", iconName: "layout" },
        { name: "React", iconName: "layout" },
        { name: "React Native", iconName: "smartphone" },
        { name: "HTML5", iconName: "fileType" },
        { name: "CSS3", iconName: "fileType" },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: ".NET Core", iconName: "server" },
        { name: ".NET Framework", iconName: "server" },
        { name: "MySQL", iconName: "database" },
        { name: "MongoDB", iconName: "database" },
        { name: "SQL", iconName: "database" },
      ],
    },
    {
      category: "Development Practices",
      skills: [
        { name: "Object-Oriented Programming (OOP)", iconName: "layers" },
        { name: "Test-Driven Development (TDD)", iconName: "workflow" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", iconName: "gitBranch" },
        { name: "GitHub", iconName: "github" },
        { name: "Docker", iconName: "box" },
        { name: "WordPress", iconName: "globe" },
      ],
    },
  ]

  return (
    <section className="about-section">
      <h2 className="section-title">Introductie</h2>

      <div className="about-content">
        <div className="about-image">
          <img src="https://via.placeholder.com/400x500" alt="Terry Boateng" />
        </div>

        <div className="about-text">
          <h3>Mijn profiel</h3>
          <p>
            Ik ben een enthousiaste IT-programmeur met oog voor detail en een passie voor het ontwikkelen van efficiënte
            en schaalbare applicaties. Ik heb ervaring in full-stack development en werk graag met moderne frameworks en
            technologieën zoals JavaScript, TypeScript, .NET Core en React. Het toepassen van Test-Driven Development
            vind ik belangrijk om de codekwaliteit te verbeteren en stevige softwareoplossingen te bouwen. Ik ben op
            zoek naar een rol waar ik mijn kennis kan inzetten in een dynamisch team om samen te werken aan impactvolle
            projecten.
          </p>

          <div className="personal-info">
            <div className="info-item">
              <span className="info-title">Name:</span>
              <span className="info-value">Terry Boateng</span>
            </div>
            <div className="info-item">
              <span className="info-title">Email:</span>
              <span className="info-value">BoatengTerry@outlook.com</span>
            </div>
            <div className="info-item">
              <span className="info-title">Location:</span>
              <span className="info-value">Antwerpen, Belgie</span>
            </div>
            <div className="info-item">
              <span className="info-title">Availability:</span>
              <span className="info-value">Open to opportunities/Work</span>
            </div>
          </div>
          <p>Download mijn volledige CV voor meer details over mijn ervaring en vaardigheden.</p>
          <a href="/Terry_boateng_cv.pdf" className="btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="skills-container">
        <h3 className="skills-title">Vaardigheden & competenties</h3>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h4 className="category-title">{category.category}</h4>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} name={skill.name} iconName={skill.iconName} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
