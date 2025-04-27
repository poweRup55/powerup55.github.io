import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Home from "../components/Home/Home";
import { updatePageMetadata } from "../utils/pageUtils";
import {
  navLinks,
  socialLinks,
  NavLink,
  SocialLink,
} from "../components/NavBar/navLinks";

// Update page metadata
updatePageMetadata();

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div className="app-container">
        <main className="main-content">
          <div className="content-container">
            <Home />
          </div>
        </main>
      </div>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
