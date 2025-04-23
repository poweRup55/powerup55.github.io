import React, { useState, useEffect } from "react";
import "../ComponentsStyles.css";

const AnimatedElement = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`animated-element ${className} ${
        isVisible ? "visible" : ""
      }`.trim()}
      data-animated-element
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
