import React from "react";
import "./Project.css";

// Define the props interface for ProjectTemplate
interface ProjectTemplateProps {
  title: string;
  description: string;
  popupUrl: string;
  buttonText?: string; // Optional button text
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  popupUrl,
  buttonText = "Open Demo", // Default value for optional prop
}) => {
  // Handler function to open the popup
  const handleOpenPopup = (): void => {
    // Consider adding error handling or checks for popup blockers
    window.open(popupUrl, "_blank", "width=600,height=600,noopener,noreferrer");
  };

  // Handler for keydown event on the button for accessibility
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpenPopup();
    }
  };

  return (
    <div className="card project-template project-template-custom">
      <h2 className="project-template-title">{title}</h2>
      <p className="project-template-description">{description}</p>
      <button
        className="project-template-button"
        onClick={handleOpenPopup}
        onKeyDown={handleKeyDown} // Add keydown handler
        type="button" // Explicitly set button type
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProjectTemplate;
