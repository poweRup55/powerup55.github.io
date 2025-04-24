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
import PopupDemo from "./components/Modal/PopupDemo";
import About from "./components/About/About";
import HomeNav from "./components/Home/HomeNav";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <main className="main-content">
        {location.pathname !== "/" && <HomeNav />}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film-editing" element={<FilmEditing />} />
            <Route path="/computer-science" element={<ComputerScience />} />
            <Route path="/project-demo" element={<ProjectDemo />} />
            <Route path="/popup-demo" element={<PopupDemo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
