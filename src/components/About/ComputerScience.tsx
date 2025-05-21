import React from "react";
import "./About.css";
import "../styles/Shared.css";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap
} from "react-icons/fa";
import MediaCardGrid from "../Project/MediaCardGrid";
import { MediaCardProps } from "../Project/MediaCard";
import ProjectGallery from "../Project/ProjectGallery";
import { Project } from "../Project/ProjectGallery";
import { getFallbackImage } from "../../utils/videoUtils";

interface CSCardData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const csCards: CSCardData[] = [
  {
    title: "Skills & Technologies",
    icon: <FaCode size={32} color="#00ff99" />,
    description:
      "Languages: JavaScript, TypeScript, Python, Java, C++, C, C#.\nWeb: Node.js, REST APIs, RxJS, HTML, CSS.\nOther Tools: Git, Linux, GitHub Actions, Jest, CI/CD.\nCreative/Other: Unity, OpenCV, Figma, pandas, numpy.",
  },
  {
    title: "Professional Experience",
    icon: <FaBriefcase size={32} color="#00ff99" />,
    description:
      "Software Developer, Joyned\n(Sep 2023 - May 2025)\n• Built and scaled production-grade web applications used by millions.\n• Designed real-time collaboration tools using TypeScript, RxJS, and Web APIs.\n• Wrote internal tools and automation scripts in Python and JavaScript.\n• Worked closely with product managers and backend engineers to ship features.\n• Improved CI/CD workflows, refactored legacy code, and led quality initiatives.",
  },
  {
    title: "Education",
    icon: <FaGraduationCap size={32} color="#00ff99" />,
    description:
      "Dual-Degree in Computer Science & Media (Oct 2018 - Aug 2024)\nB.Sc. Computer Science, Hebrew University\nBFA Screen-Based Arts, Bezalel Academy",
  },
];

const codeProjects: Project[] = [
  {
    title: "The Conspiracy Theorist",
    description:
      "Built a machine learning model to classify user beliefs from Reddit using Python. Used NLP, clustering, and data visualization tools.",
    url: "https://github.com/poweRup55/The-Conspiracy-Theorist",
    image: getFallbackImage("DEVELOPER"),
  },
  {
    title: "STREAM",
    description:
      "Developed an interactive installation using OpenCV and Python. Combined real-time audio-visual feedback with creative logic.",
    url: "https://github.com/poweRup55/STREAM",
    image: getFallbackImage("DEVELOPER"),
  },
];

const ComputerScience: React.FC = () => {
  const mediaCards: MediaCardProps[] = csCards.map((card) => ({
    title: card.title,
    description: card.description,
    icon: card.icon,
    className: "cs-media-card",
  }));

  return (
    <div className="content-page cs-portfolio-page">
      <MediaCardGrid cards={mediaCards} className="cs-media-card-grid" />
      <h2 className="content-page-title cs-projects-title">Projects</h2>
      <ProjectGallery title="" projects={codeProjects} />
    </div>
  );
};

export default ComputerScience;
