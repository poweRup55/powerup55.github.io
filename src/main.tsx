import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Note: This file is kept for reference but is no longer the main entry point
// Each page now has its own entry point in the src/pages directory

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
