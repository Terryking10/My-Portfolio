import "../styles/About.css"
import SkillItem from "./SkillItem"

const About = () => {
    const skills = [
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 90 },
        { name: "C#", level: 75 }, // .NET uses C#
        { name: ".NET Core", level: 75 },
        { name: ".NET Framework", level: 70 },
      
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "UI/UX Design", level: 80 },
      
       
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
      
        
        { name: "Object-Oriented Programming (OOP)", level: 80 },
        { name: "Test-Driven Development (TDD)", level: 80 },
      
        
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
        { name: "Docker", level: 70 },
        { name: "WordPress", level: 90 }
      ];

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
            Ik ben een enthousiaste IT-programmeur met oog voor detail en
            een passie voor het ontwikkelen van efficiënte en schaalbare
            applicaties. Ik heb ervaring in full-stack development en werk
            graag met moderne frameworks en technologieën zoals
            JavaScript, TypeScript, .NET Core en React. Het toepassen van
            Test-Driven Development vind ik belangrijk om de codekwaliteit
            te verbeteren en stevige softwareoplossingen te bouwen. Ik ben
            op zoek naar een rol waar ik mijn kennis kan inzetten in een
            dynamisch team om samen te werken aan impactvolle projecten.
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
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
