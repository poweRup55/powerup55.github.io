import React from "react";
import ProjectPopup from "../Project/ProjectPopup";

// Type the getQueryParam function
const getQueryParam = (param: string): string => {
  // Ensure window object is available (for SSR or testing environments)
  if (typeof window === "undefined") {
    return "";
  }
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "";
};

// Type the component as React.FC
const PopupDemo: React.FC = () => {
  const title: string = getQueryParam("title") || "Project Popup";
  const description: string =
    getQueryParam("description") || "This is a project popup window.";

  // Assuming ProjectPopupProps are defined in ProjectPopup.tsx
  // Pass props according to the expected interface
  return (
    <ProjectPopup
      title={title}
      description={description}
      // className="popup-demo" // Pass className if ProjectPopup accepts it
    />
  );
};

export default PopupDemo;
