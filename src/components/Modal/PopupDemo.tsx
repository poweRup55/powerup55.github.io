import React from "react";
import ProjectPopup from "../Project/ProjectPopup";

const getQueryParam = (param: string): string => {
  if (typeof window === "undefined") {
    return "";
  }
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "";
};

const PopupDemo: React.FC = () => {
  const title: string = getQueryParam("title") || "Project Popup";
  const description: string =
    getQueryParam("description") || "This is a project popup window.";

  return <ProjectPopup title={title} description={description} />;
};

export default PopupDemo;
