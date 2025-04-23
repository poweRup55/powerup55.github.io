// ProjectPopup.jsx
import React, { useEffect } from "react";
import "../ComponentsStyles.css";

const ProjectPopup = ({ title, description }) => {
  useEffect(() => {
    const handler = (event) => {
      if (event.data?.type === "PROJECT_BROADCAST") {
        alert(event.data.text);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="project-popup project-popup-custom">
      <h2 className="project-popup-title">{title}</h2>
      <p className="project-popup-description">{description}</p>
      <p className="project-popup-note project-popup-note-custom">
        This is a popup window for the project.
      </p>
    </div>
  );
};

export default ProjectPopup;
