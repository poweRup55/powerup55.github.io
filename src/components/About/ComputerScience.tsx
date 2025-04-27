import React from "react";
import "./About.css";
import "../styles/Shared.css";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaUsers,
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
    title: "About Me",
    icon: <FaUser size={32} color="#00ff99" />,
    description:
      "Hi! I'm Yonatan Koritny, a passionate software engineer who loves building things that make a difference. I thrive on solving complex problems and collaborating with others to bring ideas to life. My journey combines a dual degree in Computer Science and Media, giving me a unique perspective on technology and design.",
  },
  {
    title: "Skills & Technologies",
    icon: <FaCode size={32} color="#00ff99" />,
    description:
      "Languages: Python, C++, C#, C, JavaScript, TypeScript, Java.\nFrameworks: React, Node.js, RxJS, REST, HTML, CSS.\nTools: Git, Linux, Unity, Rhino, GitHub Actions, Jest.",
  },
  {
    title: "Professional Experience",
    icon: <FaBriefcase size={32} color="#00ff99" />,
    description:
      "Frontend Developer @ Joyned (Sep 2023 - May 2025):\n- Built scalable web applications used by thousands.\n- Automated workflows with Python & JavaScript.\n- Collaborated with cross-functional teams to deliver impactful products.",
  },
  {
    title: "Education",
    icon: <FaGraduationCap size={32} color="#00ff99" />,
    description:
      "Dual Degree: Computer Science & Media (Oct 2018 - Aug 2024)\n- B.Sc. Computer Science, Hebrew University\n- BFA Screen-Based Arts, Bezalel Academy",
  },
  {
    title: "Certifications & Awards",
    icon: <FaCertificate size={32} color="#00ff99" />,
    description:
      "🏆 2nd Place, Facebook Hackathon\nCertified in Advanced Python (Coursera)",
  },
  {
    title: "Open Source & Community",
    icon: <FaUsers size={32} color="#00ff99" />,
    description:
      "Contributor to open source projects on GitHub.\nActive member of local tech meetups and hackathons.",
  },
];

const codeProjects: Project[] = [
  {
    title: "React Component Library",
    description:
      "A collection of reusable UI components built with React and TypeScript.",
    url: "https://github.com/yonatankoritny/react-components",
    image: getFallbackImage("DEVELOPER"),
  },
  {
    title: "Data Visualization Tool",
    description:
      "Interactive data visualization web application using D3.js and React.",
    url: "https://github.com/yonatankoritny/data-viz-tool",
    image: getFallbackImage("DEVELOPER"),
  },
  {
    title: "Algorithm Playground",
    description:
      "Implementation of various algorithms and data structures in TypeScript.",
    url: "https://github.com/yonatankoritny/algo-playground",
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
      <div className="cs-profile-image-wrapper">
        <div className="cs-profile-image">
          <FaUser size={64} color="#00ff99" />
        </div>
        <div className="cs-profile-name">Yonatan Koritny</div>
        <div className="cs-profile-role">
          Software Engineer & Creative Technologist
        </div>
      </div>
      <h1 className="content-page-title cs-portfolio-title">
        Computer Science
      </h1>
      <MediaCardGrid cards={mediaCards} className="cs-media-card-grid" />

      <h2 className="content-page-title cs-projects-title">My Projects</h2>
      <ProjectGallery title="" projects={codeProjects} />
    </div>
  );
};

export default ComputerScience;
