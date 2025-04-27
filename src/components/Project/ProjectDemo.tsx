import React from "react";
import ProjectGallery from "./ProjectGallery";
import "./Project.css";
import "../styles/Shared.css";
import { Project } from "./ProjectGallery";
import { getFallbackImage } from "../../utils/videoUtils";

const demoProjects: Project[] = [
  {
    title: "Demo Project",
    description:
      "This is a demo of the reusable project template. Click to view the GitHub repository.",
    url: "https://github.com/yonatankoritny/demo-project",
    image: getFallbackImage("DEVELOPER"),
  },
  {
    title: "Project Alpha",
    description: "Alpha project with complete source code on GitHub.",
    url: "https://github.com/yonatankoritny/project-alpha",
    image: getFallbackImage("DEVELOPER"),
  },
  {
    title: "Project Beta",
    description: "Beta project repository with documentation and examples.",
    url: "https://github.com/yonatankoritny/project-beta",
    image: getFallbackImage("DEVELOPER"),
  },
];

const ProjectDemo: React.FC = () => (
  <ProjectGallery title="Developer Projects" projects={demoProjects} />
);

export default ProjectDemo;
