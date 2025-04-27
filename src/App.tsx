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
import ProjectDemo from "./components/Project/ProjectDemo";
// import PopupDemo from "./components/Modal/PopupDemo"; // Assuming PopupDemo might not be used directly here or needs review
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import {
  navLinks,
  socialLinks,
  NavLink,
  SocialLink,
} from "./components/navLinks"; // Import types

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Define the props type for Navbar explicitly if needed, otherwise inferred
  // Assuming NavbarProps type is defined within Navbar.tsx or imported
  // For now, using the imported types NavLink and SocialLink for clarity
  const navbarProps = {
    navLinks: navLinks as NavLink[], // Cast if necessary, or ensure navLinks matches type
    socialLinks: socialLinks as SocialLink[], // Cast if necessary
    showHome: true, // Assuming showHome is a boolean prop
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {!isHomePage && (
          <div
            style={{
              width: "100%",
              position: "fixed", // Type assertion for CSS properties
              top: 0,
              left: 0,
              zIndex: 100,
            }}
          >
            {/* Pass structured props */}
            <Navbar {...navbarProps} />
          </div>
        )}
        <main
          className="main-content"
          style={{ marginTop: !isHomePage ? "70px" : 0 }} // Ensure CSS properties are valid
        >
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/film-editor" element={<FilmEditing />} />
              <Route path="/developer" element={<ComputerScience />} />
              <Route path="/artist" element={<ProjectDemo />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/popup-demo" element={<PopupDemo />} /> */}{" "}
              {/* Example if PopupDemo route is needed */}
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
