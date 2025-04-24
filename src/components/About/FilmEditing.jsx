import React from "react";
import ProjectPopup from "../Project/ProjectPopup";
import "../ComponentsStyles.css";

const filmProjects = [
  {
    title: "Project 1",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "",
  },
  {
    title: "Project 2",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "",
  },
  {
    title: "Project 3",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "",
  },
];

const FilmEditing = () => {
  const [modal, setModal] = React.useState(null);
  const openProjectPopup = (title, description) =>
    setModal({ title, description });
  const closeModal = () => setModal(null);

  return (
    <div className="content-page">
      <h1 className="content-page-title">Film and Editing</h1>
      <div className="media-card-grid">
        {filmProjects.map((project, idx) => (
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

export default FilmEditing;
