import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Components for different sections
const Home = () => (
  <div className="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Explore my work in Film and Editing, and Computer Science.</p>
  </div>
);

const FilmEditing = () => (
  <div className="film-editing">
    <h1>Film and Editing</h1>
    <p>Showcasing my projects and achievements in film and video editing.</p>
  </div>
);

const ComputerScience = () => (
  <div className="computer-science">
    <h1>Computer Science</h1>
    <p>
      Highlighting my work and skills in software development and technology.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/film-editing">Film and Editing</Link>
        <Link to="/computer-science">Computer Science</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film-editing" element={<FilmEditing />} />
        <Route path="/computer-science" element={<ComputerScience />} />
      </Routes>
    </Router>
  );
}

export default App;
