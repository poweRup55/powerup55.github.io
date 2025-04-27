import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Animations.css";

interface OrbitWord {
  label: string;
  ariaLabel: string;
  path: string;
}

const orbitWords: OrbitWord[] = [
  { label: "Artist", ariaLabel: "Artist", path: "/artist" },
  { label: "Video Editor", ariaLabel: "Video Editor", path: "/film-editor" },
  { label: "Developer", ariaLabel: "Developer", path: "/developer" },
];

interface OrbitStyle extends React.CSSProperties {
  "--angle": string;
  "--radius": string;
}

const RotatingWords: React.FC = () => {
  const navigate = useNavigate();
  const orbitRadius: number = 250;
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 750
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWordClick = (path: string): void => {
    navigate(path);
  };

  const handleWordKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>,
    path: string
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleWordClick(path);
    }
  };

  return (
    <div className="rotating-words-container">
      <a className="center-name" aria-label="Yonatan Koritny" href="/about">
        Yonatan
        <br />
        Koritny
      </a>

      {isMobileView ? (
        <div className="static-words-container">
          {orbitWords.map((word) => (
            <button
              key={word.label}
              className="static-word-button"
              aria-label={word.ariaLabel}
              onClick={() => handleWordClick(word.path)}
              onKeyDown={(e) => handleWordKeyDown(e, word.path)}
            >
              {word.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="orbit-container">
          {orbitWords.map((word, idx) => {
            const angle: number = (idx / orbitWords.length) * 360;

            const style: OrbitStyle = {
              "--angle": `${angle}deg`,
              "--radius": `${orbitRadius}px`,
            };

            return (
              <div
                key={word.label}
                className="orbit-word"
                style={style}
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
      )}
    </div>
  );
};

export default RotatingWords;
