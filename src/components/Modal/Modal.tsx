import { motion } from 'framer-motion';
import type {Project} from '../../data/projects.ts';
import './Modal.css';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
  return (
    <motion.div
      className={"modal-backdrop"}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={"modal-content"}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button className={"modal-close-button"} onClick={onClose}>
          &times;
        </button>
        <h2 className={"modal-title"}>{project.title}</h2>
        <div className={"modal-tech-stack"}>
          {project.techStack.map((tech) => (
            <span key={tech} className={"tech-pill"}>
              {tech}
            </span>
          ))}
        </div>
        <p className={"modal-description"}>{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Modal;