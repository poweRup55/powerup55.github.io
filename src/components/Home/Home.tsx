import React, { useState, useEffect } from "react";
import "./Home.css";
import RotatingWords from "../Animation/RotatingWords";

const Home: React.FC = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-centered-container">
      <main className="home-main-content" aria-label="Homepage main content">
        <RotatingWords />
        {showHint && (
          <p className="home-hint-text">
            Click on any of the floating words to explore
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
