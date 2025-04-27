import React, { useState } from "react";
import ProjectPopup from "./Project/ProjectPopup";
import Modal from "./Modal/Modal";
import MediaCardGrid from "./MediaCardGrid";
import "./styles/Shared.css";
import { MediaCardProps } from "./MediaCard"; // Corrected import

// Define and export the structure for a project
export interface Project {
  title: string;
  description: string;
  image?: string; // Optional image URL
  // Add other project-specific fields if needed, e.g., details, techStack
}

// Define the props for the ProjectGallery component
interface ProjectGalleryProps {
  title: string;
  projects: Project[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ title, projects }) => {
  // State to hold the currently selected project for the modal, typed as Project or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handler to open the modal with the selected project data
  const handleOpenProjectPopup = (project: Project): void => {
    setSelectedProject(project);
  };

  // Handler to close the modal
  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  // Map projects to the format expected by MediaCardGrid (MediaCardProps[])
  const cards: MediaCardProps[] = projects.map((project) => ({
    title: project.title,
    description: project.description,
    image: project.image,
    onClick: () => handleOpenProjectPopup(project),
  }));

  return (
    <div className="content-page">
      <h1 className="content-page-title">{title}</h1>
      <MediaCardGrid cards={cards} />
      <Modal isOpen={!!selectedProject} onClose={handleCloseModal}>
        {/* Render ProjectPopup only if a project is selected */}
        {selectedProject && (
          <ProjectPopup
            title={selectedProject.title}
            description={selectedProject.description}
            // Pass other necessary props from selectedProject to ProjectPopup
          />
        )}
      </Modal>
    </div>
  );
};

export default ProjectGallery;
