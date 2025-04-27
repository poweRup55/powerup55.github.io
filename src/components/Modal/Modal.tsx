import React, { useEffect, ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay"
      aria-modal="true"
      role="dialog"
      onClick={handleOverlayClick}
      aria-label="Modal Overlay"
    >
      <div
        className="modal-content"
        onClick={handleContentClick}
        aria-label="Modal Content"
        role="document"
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Modal"
          type="button"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
