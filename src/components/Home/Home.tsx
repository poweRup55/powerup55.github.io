import React from "react";
import "./Home.css";
import RotatingWords from "../Animation/RotatingWords";

// Type the component as React.FC
const Home: React.FC = () => (
  <div className="home-centered-container">
    <main className="home-main-content" aria-label="Homepage main content">
      <RotatingWords />
    </main>
  </div>
);

export default Home;
