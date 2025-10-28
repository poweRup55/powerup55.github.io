import React from "react";
import "./About.css";
import "../styles/Shared.css";
import { FaEnvelope, FaInstagram, FaVimeo } from "react-icons/fa";

const About: React.FC = () => (
  <div className="content-page">
    <h1 className="content-page-title">ABOUT ME</h1>
    <div className="cs-profile-image-wrapper">
      <img
        className="cs-profile-image"
        src="/yonatan_koritny_front_img.jpg"
        alt="Yonatan Koritny profile"
      />
      <div className="cs-profile-name">Yonatan Koritny</div>
      <div className="cs-profile-role-fade-wrapper" aria-label="Roles and interests">
        <div className="cs-profile-role">
          I’m a video editor, filmmaker, and content creator with over seven years of experience producing impactful visual stories for public and private organizations.
          <br />
          <br />
          I specialize in turning ideas into compelling narratives that resonate.
          <br />
          <br />
          I hold a dual bachelor’s degree in Computer Science from the Hebrew University of Jerusalem and Screen-Based Arts from Bezalel Academy of Arts and Design, combining technical precision with creative vision.
          <br />
          <br />
          My work includes award-winning documentaries such as Kiki (Docaviv Audience Choice) and Vacuum, supported by the New Fund for Cinema and Television.
        </div>
      </div>
      <div className="cs-profile-note">
        <p className="cs-profile-tagline">
          Let's create something amazing together!
        </p>
        <div className="cs-social-icons">
          <a
            href="mailto:yonatan.koritny@gmail.com"
            className="cs-social-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/yonatan_koritny/"
            className="cs-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://vimeo.com/yonatankoritny"
            className="cs-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vimeo"
          >
            <FaVimeo />
          </a>
        </div>
      </div>
    </div>

  </div>
);

export default About;
