import React from "react";
import { useNavigate } from "react-router-dom";
import "./Animations.css";

// Define the structure for an orbiting word
interface OrbitWord {
  label: string;
  ariaLabel: string;
  path: string;
}

// Define the array of words with the OrbitWord type
const orbitWords: OrbitWord[] = [
  { label: "Artist", ariaLabel: "Artist", path: "/artist" },
  { label: "Video Editor", ariaLabel: "Video Editor", path: "/film-editor" },
  { label: "Developer", ariaLabel: "Developer", path: "/developer" },
];

// Define CSS properties including custom properties
interface OrbitStyle extends React.CSSProperties {
  "--angle": string;
  "--radius": string;
}

const RotatingWords: React.FC = () => {
  const navigate = useNavigate();
  const orbitRadius: number = 170; // Explicitly type radius

  // Type the path parameter as string
  const handleWordClick = (path: string): void => {
    navigate(path);
  };

  // Type the event and path parameters
  const handleWordKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    path: string
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleWordClick(path);
    }
  };

  return (
    <div className="rotating-words-container">
      <div className="center-name" aria-label="Yonatan Koritny">
        Yonatan
        <br />
        Koritny
      </div>

      <div className="orbit-container">
        {orbitWords.map((word, idx) => {
          const angle: number = (idx / orbitWords.length) * 360; // Explicitly type angle

          // Define the style object with the OrbitStyle type
          const style: OrbitStyle = {
            "--angle": `${angle}deg`,
            "--radius": `${orbitRadius}px`,
          };

          return (
            <div
              key={word.label}
              className="orbit-word"
              style={style} // Apply the typed style object
              tabIndex={0}
              aria-label={word.ariaLabel}
              role="button"
              onClick={() => handleWordClick(word.path)}
              onKeyDown={(e) => handleWordKeyDown(e, word.path)}
            >
              <span className="orbit-word-text">{word.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotatingWords;
