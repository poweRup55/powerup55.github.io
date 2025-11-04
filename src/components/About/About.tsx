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
          <ul className="cs-bullets about-bullets">
            <li>Video editor, filmmaker, and content creator.</li>
            <li>Dual B.A. in Computer Science and Media.</li>
            <li>7+ years crafting impactful visual stories.</li>
            <li>Turns ideas into compelling narratives.</li>
            <li>Open to collaborations worldwide.</li>
          </ul>
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
