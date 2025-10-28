import React, { useState, useEffect } from "react";
import "./Animations.css";

interface OrbitWord {
  label: string;
  ariaLabel: string;
  path: string;
}

const orbitWords: OrbitWord[] = [
  { label: "Films", ariaLabel: "Films", path: "/films" },
  { label: "Social Media", ariaLabel: "Social Media", path: "/social-media" },
  { label: "Art Projects", ariaLabel: "Art Projects", path: "/art-projects" },
];

interface OrbitStyle extends React.CSSProperties {
  "--angle": string;
  "--radius": string;
}

const RotatingWords: React.FC = () => {
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
    // Use clean URLs
    window.location.href = path;
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
        YONATAN
        <br />
        KORITNY
      </a>

      {isMobileView ? (
        <div className="static-words-container">
          <p className="mobile-tagline">Explore my work</p>
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
