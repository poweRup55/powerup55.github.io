import React, { useEffect, ReactNode } from "react";
import "./Modal.css";

// Define the props interface for the Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Type the event parameter
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  // Type the overlay click event
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Only close if the overlay itself (not content) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Type the content click event
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Prevent clicks inside the modal content from closing the modal
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay"
      // tabIndex={-1} // Make overlay focusable for screen readers, but not via sequential keyboard navigation
      aria-modal="true"
      role="dialog"
      onClick={handleOverlayClick} // Use the typed handler
      aria-label="Modal Overlay" // Consider a more descriptive label if possible
    >
      <div
        className="modal-content"
        onClick={handleContentClick} // Use the typed handler
        // tabIndex={0} // Content should be focusable if it contains interactive elements
        aria-label="Modal Content" // Label for the content area
        role="document" // More appropriate role for the content container
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Modal"
          type="button" // Explicitly set button type
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
