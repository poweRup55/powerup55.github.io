import React from "react";
import AnimatedElement from "../Animation/AnimatedElement";
import "../ComponentsStyles.css";

const About = () => (
  <div className="content-page">
    <h1 className="content-page-title">ABOUT ME</h1>
    <div className="media-card-grid">
      <div className="media-card">
        <div className="media-card-image" style={{ background: "#232836" }} />
        <div className="media-card-title">Blending Creativity & Technology</div>
        <div className="media-card-description">
          Hi! I'm Yonatan Koritny, passionate about storytelling, film editing,
          and computer science. My journey bridges the worlds of art and
          technology, allowing me to create, innovate, and solve problems in
          unique ways. Explore my portfolio to see how I bring ideas to life
          through both code and creativity.
        </div>
      </div>
    </div>
  </div>
);

export default About;
