import React from "react";
import "./About.css";
import "../styles/Shared.css";

const About: React.FC = () => (
  <div className="content-page">
    <h1 className="content-page-title">ABOUT ME</h1>
    <div className="cs-profile-image-wrapper">
      <img
        className="cs-profile-image"
        src="src/components/images/yonatan_koritny_front_img.jpg"
        alt="Yonatan Koritny profile"
      />
      <div className="cs-profile-name">Yonatan Koritny</div>
      <div className="cs-profile-role-fade-wrapper" aria-label="Roles and interests">
        <div className="cs-profile-role">
          Software Engineer · Video Artist · Film Editor · React & Next.js Expert · Motion Graphics Designer · TypeScript Specialist · Visual Storyteller · Cinematic Thinker · Experimental Filmmaker · Code Reviewer · Visual Effects Enthusiast · Automation Fan · Sound Designer · API Integrator · Problem Solver · Performance Optimizer · Lifelong Learner · Creative Technologist · Innovation Seeker · DIY Tinkerer · Pickle Maker · Movie Buff · Podcast Listener · Hip Hop Lover · Coffee Enthusiast · Dog Person · Urban Cyclist · Gym Bro · Office DJ · Amateur Chef · Plant Caretaker · Traveler · Curious Mind · Video Games Master · CSS Wizard · Figma Collaborator ·  Team Player · Knowledge Sharer · Continuous Learner · Feedback Giver · Night Owl · Early Adopter · Aspiring Music Maker · Art Lover · Science Geek
        </div>
      </div>
      <div className="cs-profile-note">
        Well.. I can do a lot things
        <br />
        If you like anything you see here, or if you want to collaborate on something, feel free to reach out.
        <br />
        Email: yonatan.koritny@gmail.com
        <br />
        Or click on the links above to connect with me on social media.
      </div>
    </div>

  </div>
);

export default About;
