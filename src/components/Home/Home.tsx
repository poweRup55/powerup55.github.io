import React from "react";
import "./Home.css";
import RotatingWords from "../Animation/RotatingWords";

const Home: React.FC = () => (
  <div className="home-centered-container">
    <main className="home-main-content" aria-label="Homepage main content">
      <RotatingWords />
    </main>
  </div>
);

export default Home;
