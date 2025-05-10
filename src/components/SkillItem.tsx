import "../styles/SkillItem.css"

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <h4 className="skill-name">{name}</h4>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

export default SkillItem
