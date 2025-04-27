import React from "react";
import "./Project.css";

interface ProjectTemplateProps {
  title: string;
  description: string;
  url: string;
  buttonText?: string;
  isExternalLink?: boolean;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  url,
  buttonText = "View Project",
  isExternalLink = false,
}) => {
  const handleProjectClick = (): void => {
    if (isExternalLink) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleProjectClick();
    }
  };

  return (
    <div className="card project-template project-template-custom">
      <h2 className="project-template-title">{title}</h2>
      <p className="project-template-description">{description}</p>
      <button
        className="project-template-button"
        onClick={handleProjectClick}
        onKeyDown={handleKeyDown}
        type="button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProjectTemplate;
