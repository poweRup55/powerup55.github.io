import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import LandingPageTemplate from "./LandingPageTemplate";

const navLinks = [
  { label: "Music Videos", href: "/film-editing" },
  { label: "Web Series", href: "/computer-science" },
  { label: "Other Projects", href: "/project-demo" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "https://facebook.com/", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com/", label: "Instagram" },
];

const ComputerScienceHome = () => {
  const navigate = useNavigate();
  return (
    <LandingPageTemplate
      title="COMPUTER SCIENCE"
      subtitle="Building with Code & Logic"
      description="Dive into my computer science projects, where I solve problems, build applications, and explore the world of algorithms, data, and technology."
      navLinks={navLinks}
      socialLinks={socialLinks}
      projectsLink={{ href: "#projects", label: "See CS Projects" }}
      buttons={[
        {
          label: "Film Editing",
          className: "cs-home-btn",
          onClick: () => navigate("/film-editing"),
        },
        {
          label: "Computer Science",
          className: "cs-home-btn",
          onClick: () => navigate("/computer-science"),
        },
      ]}
      pageClass="cs-home-page"
      titleClass="cs-home-title"
      subtitleClass="cs-home-subtitle"
      descriptionClass="cs-home-description"
      navClass="cs-home-nav"
      navLinkClass="cs-home-nav-link"
      projectsLinkClass="cs-home-projects-link"
      buttonsClass="cs-home-buttons"
      socialBarClass="cs-home-social-bar"
      socialLinkClass="cs-home-social-link"
    />
  );
};

export default ComputerScienceHome;
