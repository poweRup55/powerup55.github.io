import React from "react";
import ProjectPopup from "../Project/ProjectPopup";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "";
}

const PopupDemo = () => {
  const title = getQueryParam("title") || "Project Popup";
  const description =
    getQueryParam("description") || "This is a project popup window.";
  return (
    <ProjectPopup
      title={title}
      description={description}
      className="popup-demo"
    />
  );
};

export default PopupDemo;
