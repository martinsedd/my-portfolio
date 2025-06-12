import type { Project } from "../../data/projects.ts";
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={"project-card"}>
      <h3 className={"project-title"}>{project.title}</h3>
      <p className={"project-description"}>{project.description}</p>
      <div className={"project-tech-stack"}>
        {project.techStack.map((tech) => (
          <span key={tech} className={"tech-pill"}>
            {tech}
          </span>
        ))}
      </div>
      <div className={"project-links"}>
        <a
          href={project.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={"project-link primary"}
        >
          Source Code
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={"project-link secondary"}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

