import React from "react";
import { useNavigate } from "react-router-dom";
import MediaCardGrid from "./MediaCardGrid";
import "../styles/Shared.css";
import { MediaCardProps } from "./MediaCard";

export interface Project {
  title: string;
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
  const navigate = useNavigate();

  const handleProjectClick = (project: Project): void => {
    if (onProjectClick) {
      onProjectClick(project);
    } else if (project.url) {
      if (project.url.startsWith("http")) {
        window.open(project.url, "_blank", "noopener,noreferrer");
      } else {
        navigate(project.url);
      }
    } else {
      navigate(`/project?title=${encodeURIComponent(project.title)}`);
    }
  };

  const cards: MediaCardProps[] = projects.map((project) => ({
    title: project.title,
    description: project.description,
    image: project.image,
    onClick: () => handleProjectClick(project),
  }));

  return (
    <div className="content-page">
      <h1 className="content-page-title">{title}</h1>
      <MediaCardGrid cards={cards} />
    </div>
  );
};

export default ProjectGallery;
