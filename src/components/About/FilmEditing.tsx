import React from "react";
import ProjectGallery from "../ProjectGallery";
import "./About.css";
import "../styles/Shared.css";
// Corrected import for the Project interface
import { Project } from "../ProjectGallery"; // Adjust path if needed

// Type the filmProjects array using the Project interface
const filmProjects: Project[] = [
  {
    title: "Project 1",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "", // Add actual image path or remove if none
  },
  {
    title: "Project 2",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "", // Add actual image path or remove if none
  },
  {
    title: "Project 3",
    description:
      "A beautiful film project showcasing creativity and technical skill.",
    image: "", // Add actual image path or remove if none
  },
];

// Type the component as React.FC
const FilmEditing: React.FC = () => (
  <ProjectGallery title="Film and Editing" projects={filmProjects} />
);

export default FilmEditing;
