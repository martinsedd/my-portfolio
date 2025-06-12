// src/components/ProjectsSection/ProjectsSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Modal from "../Modal/Modal";
import "./ProjectsSection.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Work & Projects</h2>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onCardClick={handleCardClick}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;