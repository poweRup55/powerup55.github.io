import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import FilmEditing from "./components/About/FilmEditing";
import ComputerScience from "./components/About/ComputerScience";
import Artist from "./components/About/Artist";
import About from "./components/About/About";
import Navbar from "./components/NavBar/Navbar";
import {
  navLinks,
  socialLinks,
  NavLink,
  SocialLink,
} from "./components/NavBar/navLinks";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navbarProps = {
    navLinks: navLinks as NavLink[],
    socialLinks: socialLinks as SocialLink[],
    showHome: true,
  };

  return (
    <>
      <div className="app-container">
        {!isHomePage && (
          <div className="fixed-navbar">
            <Navbar {...navbarProps} />
          </div>
        )}
        <main
          className={`main-content ${
            !isHomePage ? "main-content-with-nav" : ""
          }`}
        >
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/film-editor" element={<FilmEditing />} />
              <Route path="/developer" element={<ComputerScience />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
