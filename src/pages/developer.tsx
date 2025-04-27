import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import ComputerScience from "../components/About/ComputerScience";
import Navbar from "../components/NavBar/Navbar";
import { updatePageMetadata } from "../utils/pageUtils";
import {
  navLinks,
  socialLinks,
  NavLink,
  SocialLink,
} from "../components/NavBar/navLinks";

// Update page metadata
updatePageMetadata();

const navbarProps = {
  navLinks: navLinks as NavLink[],
  socialLinks: socialLinks as SocialLink[],
  showHome: true,
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div className="app-container">
        <div className="fixed-navbar">
          <Navbar {...navbarProps} />
        </div>
        <main className="main-content main-content-with-nav">
          <div className="content-container">
            <ComputerScience />
          </div>
        </main>
      </div>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
