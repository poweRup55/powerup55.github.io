import React from "react";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import {
  navLinks,
  socialLinks,
  NavLink,
  SocialLink,
} from "./components/NavBar/navLinks";

// This file is kept for reference but is no longer used in the multi-page site
// Each page now has its own entry point in the src/pages directory

const App: React.FC = () => {
  // Check if we're on the home page
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html");

  const navbarProps = {
    navLinks: navLinks as NavLink[],
    socialLinks: socialLinks as SocialLink[],
    showHome: true,
  };

  return (
    <div className="app-container">
      {!isHomePage && (
        <div className="fixed-navbar">
          <Navbar {...navbarProps} />
        </div>
      )}
      <main
        className={`main-content ${!isHomePage ? "main-content-with-nav" : ""}`}
      >
        <div className="content-container">
          <Home />
        </div>
      </main>
    </div>
  );
};

export default App;
