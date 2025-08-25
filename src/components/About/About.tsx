import React from "react";
import "./About.css";
import "../styles/Shared.css";
import { FaEnvelope, FaInstagram, FaLinkedin, FaVimeo } from "react-icons/fa";

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
          Creative Technologist · Visual Storyteller · Cinematic Thinker · Experimental Filmmaker · Motion Graphics Designer · Video Artist · Film Editor · Art Lover · Sound Designer · Hip Hop Lover · Office DJ · Aspiring Music Maker · Movie Buff · Podcast Listener · Urban Cyclist · Traveler · Plant Caretaker · Amateur Chef · Coffee Enthusiast · Dog Person · Pickle Maker · Curious Mind · Science Geek · Lifelong Learner · DIY Tinkerer · Night Owl · Figma Collaborator · Team Player · Knowledge Sharer · Feedback Giver · Continuous Learner · Software Engineer · React & Next.js Expert · TypeScript Specialist · Code Reviewer · Visual Effects Enthusiast · Automation Fan · API Integrator · Problem Solver · Performance Optimizer · CSS Wizard · Gym Bro · Early Adopter · Video Games Master
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
            href="https://www.linkedin.com/in/yonatan-koritny/"
            className="cs-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
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
