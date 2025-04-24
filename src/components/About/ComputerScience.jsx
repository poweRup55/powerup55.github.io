import React from "react";
import "../ComponentsStyles.css";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaUsers,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const csCards = [
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

const ComputerScience = () => (
  <div className="content-page cs-portfolio-page">
    {/* Profile image placeholder */}
    <div className="cs-profile-image-wrapper">
      <div className="cs-profile-image">
        <FaUser size={64} color="#00ff99" />
      </div>
      <div className="cs-profile-name">Yonatan Koritny</div>
      <div className="cs-profile-role">
        Software Engineer & Creative Technologist
      </div>
    </div>
    <h1 className="content-page-title cs-portfolio-title">Computer Science</h1>
    <div className="media-card-grid cs-media-card-grid">
      {csCards.map((card, idx) => (
        <div className="media-card cs-media-card" key={idx}>
          <div className="media-card-image cs-media-card-image">
            {card.icon}
          </div>
          <div className="media-card-title cs-media-card-title">
            {card.title}
          </div>
          <div
            className="media-card-description cs-media-card-description"
            style={{ whiteSpace: "pre-line" }}
          >
            {card.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ComputerScience;
