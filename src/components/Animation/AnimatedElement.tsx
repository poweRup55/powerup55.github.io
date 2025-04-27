import React, { useState, useEffect, ReactNode } from "react";
import "./Animations.css";

// Define the props interface for AnimatedElement
interface AnimatedElementProps {
  children: ReactNode; // Type children explicitly
  delay?: number; // Optional delay
  className?: string; // Optional className
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    // Clear the timer on component unmount or if delay changes
    return () => clearTimeout(timer);
  }, [delay]);

  // Construct class names conditionally
  const combinedClassName = [
    "animated-element",
    className,
    isVisible ? "visible" : "",
  ]
    .filter(Boolean) // Remove any empty strings
    .join(" ");

  return (
    <div className={combinedClassName} data-animated-element>
      {children}
    </div>
  );
};

export default AnimatedElement;
