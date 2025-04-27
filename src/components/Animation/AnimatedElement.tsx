import React, { useState, useEffect, ReactNode } from "react";
import "./Animations.css";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const combinedClassName = [
    "animated-element",
    className,
    isVisible ? "visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassName} data-animated-element>
      {children}
    </div>
  );
};

export default AnimatedElement;
