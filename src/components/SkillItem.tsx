import type React from "react"
import {
  Code,
  FileCode,
  Database,
  GitBranch,
  Layout,
  Smartphone,
  Server,
  Workflow,
  Github,
  Box,
  Globe,
  FileType,
  Layers,
  Figma,
  BookOpen,
} from "lucide-react"

interface SkillItemProps {
  name: string
  iconName: string
}

const SkillItem = ({ name, iconName }: SkillItemProps) => {
  // Map of icon names to their components
  // Using a muted blue color (#6e7f91) for the icons to match the pastel grey theme
  const iconMap: Record<string, React.ReactNode> = {
    code: <Code size={24} color="#6e7f91" />,
    fileCode: <FileCode size={24} color="#6e7f91" />,
    database: <Database size={24} color="#6e7f91" />,
    gitBranch: <GitBranch size={24} color="#6e7f91" />,
    layout: <Layout size={24} color="#6e7f91" />,
    smartphone: <Smartphone size={24} color="#6e7f91" />,
    server: <Server size={24} color="#6e7f91" />,
    workflow: <Workflow size={24} color="#6e7f91" />,
    github: <Github size={24} color="#6e7f91" />,
    box: <Box size={24} color="#6e7f91" />,
    globe: <Globe size={24} color="#6e7f91" />,
    fileType: <FileType size={24} color="#6e7f91" />,
    layers: <Layers size={24} color="#6e7f91" />,
    figma: <Figma size={24} color="#6e7f91" />,
    storybook: <BookOpen size={24} color="#6e7f91" />,
  }
  // Get the icon from the map or use a default
  const icon = iconMap[iconName] || <Code size={24} color="#6e7f91" />

  return (
    <div className="skill-item">
      <div className="skill-icon">{icon}</div>
      <span className="skill-name">{name}</span>
    </div>
  )
}

export default SkillItem
