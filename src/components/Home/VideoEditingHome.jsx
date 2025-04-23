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

const VideoEditingHome = () => {
  const navigate = useNavigate();
  return (
    <LandingPageTemplate
      title="VIDEO EDITING"
      subtitle="Crafting Stories Through Film"
      description="Explore my journey in video editing, from music videos to web series. Discover how I bring stories to life through creative cuts, sound, and visual effects."
      navLinks={navLinks}
      socialLinks={socialLinks}
      buttons={[
        {
          label: "Film Editing",
          className: "video-editing-btn",
          onClick: () => navigate("/film-editing"),
        },
        {
          label: "Computer Science",
          className: "video-editing-btn",
          onClick: () => navigate("/computer-science"),
        },
      ]}
      pageClass="video-editing-home-page"
      titleClass="video-editing-title"
      subtitleClass="video-editing-subtitle"
      descriptionClass="video-editing-description"
      navClass="video-editing-nav"
      navLinkClass="video-editing-nav-link"
      buttonsClass="video-editing-buttons"
      socialBarClass="video-editing-social-bar"
      socialLinkClass="video-editing-social-link"
    />
  );
};

export default VideoEditingHome;
