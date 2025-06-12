// src/components/ProjectCard/ProjectCard.tsx
import { motion } from "framer-motion";
import type {Project} from "../../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// const ProjectCard = ({ project, onCardClick }: ProjectCardProps) => {
//   return (
//     <motion.div
//       className="project-card"
//       onClick={() => onCardClick(project)}
//       variants={itemVariants}
//     >
//       <h3 className="project-title">{project.title}</h3>
//       <p className="project-description">{project.description}</p>
//       <div className="project-tech-stack">
//         {project.techStack.map((tech) => (
//           <span key={tech} className="tech-pill">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="project-links">
//         <a
//           href={project.sourceLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-link primary"
//           onClick={(e) => e.stopPropagation()} // Prevent modal from opening
//         >
//           <svg viewBox="0 0 24 24">{/* GitHub Icon Path */}</svg>
//           Source Code
//         </a>
//         {project.liveLink && (
//           <a
//             href={project.liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="project-link secondary"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <svg viewBox="0 0 24 24">{/* YouTube Icon Path */}</svg>
//             Live Demo
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// Add the SVG paths inside the component file for simplicity
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

// Update the main component to use these icons
const UpdatedProjectCard = ({ project, onCardClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      onClick={() => onCardClick(project)}
      variants={itemVariants}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech-stack">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link primary"
          onClick={(e) => e.stopPropagation()}
        >
          <GitHubIcon />
          Source Code
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTubeIcon />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default UpdatedProjectCard;