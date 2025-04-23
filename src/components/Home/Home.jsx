import React from "react";
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

const Home = () => (
  <LandingPageTemplate
    title="Yonatan Koritny"
    subtitle="Creative Portfolio"
    description="I’m passionate about blending storytelling and technology. Dive into my projects in Film Editing and Computer Science, where creativity meets code!"
    navLinks={navLinks}
    socialLinks={socialLinks}
    pageClass="home-page"
    titleClass="home-title"
    subtitleClass="home-subtitle"
    descriptionClass="home-description"
    navClass="home-nav"
    navLinkClass="home-nav-link"
    socialBarClass="home-social-bar"
    socialLinkClass="home-social-link"
  />
);

export default Home;
