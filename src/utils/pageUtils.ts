/**
 * Shared utility functions for the multi-page website
 */

export const getCurrentPage = (): string => {
  const path = window.location.pathname;

  // Extract the page name from the path
  if (path === "/" || path === "/index" || path.endsWith("/index.html")) {
    return "home";
  }

  // Handle clean URLs - path might be like /about or /about/
  const cleanPath = path.replace(/\/$/, ""); // Remove trailing slash
  const pageName = cleanPath.split("/").pop() || "";

  return pageName;
};

export const getPageTitle = (pageName: string): string => {
  switch (pageName) {
    case "home":
      return "Yonatan Koritny Portfolio";
    case "about":
      return "About - Yonatan Koritny Portfolio";
    case "film-editor":
      return "Film Editor - Yonatan Koritny Portfolio";
    case "developer":
      return "Developer - Yonatan Koritny Portfolio";
    case "artist":
      return "Artist - Yonatan Koritny Portfolio";
    default:
      return "Yonatan Koritny Portfolio";
  }
};

/**
 * Updates page metadata like title based on the current page
 */
export const updatePageMetadata = (): void => {
  const currentPage = getCurrentPage();
  document.title = getPageTitle(currentPage);
};

// Run metadata update on page load
window.addEventListener("DOMContentLoaded", updatePageMetadata);
