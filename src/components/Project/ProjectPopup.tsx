import React, { useEffect } from "react";
import "./Project.css";

interface ProjectBroadcastEventData {
  type: string;
  text: string;
}

interface ProjectPopupProps {
  title: string;
  description: string;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ title, description }) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent): void => {
      const data = event.data as Partial<ProjectBroadcastEventData>;
      if (data?.type === "PROJECT_BROADCAST" && typeof data.text === "string") {
        console.log("Received project broadcast:", data.text);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="project-popup project-popup-custom">
      <h2 className="project-popup-title">{title}</h2>
      <p className="project-popup-description">{description}</p>
      <p className="project-popup-note project-popup-note-custom">
        This is a popup window for the project.
      </p>
    </div>
  );
};

export default ProjectPopup;
