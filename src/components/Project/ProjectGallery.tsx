import React, { useState } from "react";
import MediaCardGrid from "./MediaCardGrid";
import "../styles/Shared.css";
import { MediaCardProps } from "./MediaCard";
import Modal from "../Modal/Modal";
import ProjectPopup from "./ProjectPopup";

export interface Project {
  title: string;
  secondaryTitle?: string;
  description: string;
  image?: string;
  url?: string;
}

interface ProjectGalleryProps {
  title: string;
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  title,
  projects,
  onProjectClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const handleProjectClick = (project: Project): void => {
    if (onProjectClick) {
      onProjectClick(project);
      return;
    }
    setSelected(project);
    setIsOpen(true);
  };

  const cards: MediaCardProps[] = projects.map((project) => ({
    title: project.title,
    secondaryTitle: project.secondaryTitle,
    description: project.description,
    image: project.image,
    href: project.url,
    onClick: () => handleProjectClick(project),
  }));

  return (
    <div className="content-page">
      <h1 className="content-page-title">{title}</h1>
      <MediaCardGrid cards={cards} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selected && (
          <ProjectPopup title={selected.title} description={selected.description} />
        )}
      </Modal>
    </div>
  );
};

export default ProjectGallery;
