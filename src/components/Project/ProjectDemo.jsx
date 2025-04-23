import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
import "../ComponentsStyles.css";

const demoProjects = [
  {
    title: "Demo Project",
    description:
      "This is a demo of the reusable project template. Click to open a popup window.",
  },
  {
    title: "Project Alpha",
    description: "Alpha project popup window.",
  },
  {
    title: "Project Beta",
    description: "Beta project popup window.",
  },
];

const ProjectDemo = () => {
  const [modal, setModal] = useState(null);
  const openProjectPopup = (title, description) =>
    setModal({ title, description });
  const closeModal = () => setModal(null);

  return (
    <div className="content-page">
      <h1 className="content-page-title">Project Demos</h1>
      <div className="media-card-grid">
        {demoProjects.map((project, idx) => (
          <div
            className="media-card"
            key={idx}
            onClick={() => openProjectPopup(project.title, project.description)}
          >
            <div
              className="media-card-image"
              style={{ background: "#232836" }}
            />
            <div className="media-card-title">{project.title}</div>
            <div className="media-card-description">{project.description}</div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="film-editing-modal-overlay film-editing-modal-overlay-custom">
          <div className="film-editing-modal-content film-editing-modal-content-custom">
            <button
              className="film-editing-close-btn film-editing-close-btn-custom"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <ProjectPopup title={modal.title} description={modal.description} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDemo;
