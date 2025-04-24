import React, { useEffect } from "react";
import "./Project.css";

// Define the structure for the expected message data
interface ProjectBroadcastEventData {
  type: string;
  text: string;
}

// Define the props interface for ProjectPopup
interface ProjectPopupProps {
  title: string;
  description: string;
  // className?: string; // Add if className prop is needed
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ title, description }) => {
  useEffect(() => {
    // Type the event parameter as MessageEvent
    const handleMessage = (event: MessageEvent): void => {
      // Safely access event data and check its type
      const data = event.data as Partial<ProjectBroadcastEventData>; // Use Partial for safe access
      if (data?.type === "PROJECT_BROADCAST" && typeof data.text === "string") {
        // Use a more user-friendly notification or logging instead of alert
        console.log("Received project broadcast:", data.text);
        // alert(data.text); // Avoid using alert in modern applications
      }
    };

    window.addEventListener("message", handleMessage);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("message", handleMessage);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Apply className if the prop is added to the interface
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
