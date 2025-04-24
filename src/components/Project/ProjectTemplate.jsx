import React from "react";
import "../ComponentsStyles.css";

const ProjectTemplate = ({
  title,
  description,
  popupUrl,
  buttonText = "Open Demo",
}) => {
  const openPopup = () => {
    window.open(popupUrl, "_blank", "width=600,height=600");
  };

  return (
    <div className="card project-template project-template-custom">
      <h2 className="project-template-title">{title}</h2>
      <p className="project-template-description">{description}</p>
      <button className="project-template-button" onClick={openPopup}>
        {buttonText}
      </button>
    </div>
  );
};

export default ProjectTemplate;
