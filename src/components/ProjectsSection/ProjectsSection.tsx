import { projects } from "../../data/projects.ts";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section id={"projects"} className={"projects-section"}>
      <h2 className={"project-heading"}>My Work & Projects</h2>
      <div className={"projects-grid"}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;