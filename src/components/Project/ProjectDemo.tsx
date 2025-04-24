import React from "react";
import ProjectGallery from "../ProjectGallery";
import "./Project.css";
import "../styles/Shared.css";
// Corrected import for the Project interface
import { Project } from "../ProjectGallery"; // Adjust path if needed

// Type the demoProjects array using the Project interface
const demoProjects: Project[] = [
  {
    title: "Demo Project",
    description:
      "This is a demo of the reusable project template. Click to open a popup window.",
    // image: "path/to/image.jpg", // Add image if available
  },
  {
    title: "Project Alpha",
    description: "Alpha project popup window.",
    // image: "path/to/alpha.jpg",
  },
  {
    title: "Project Beta",
    description: "Beta project popup window.",
    // image: "path/to/beta.jpg",
  },
];

// Type the component as React.FC
const ProjectDemo: React.FC = () => (
  <ProjectGallery title="Project Demos" projects={demoProjects} />
);

export default ProjectDemo;
