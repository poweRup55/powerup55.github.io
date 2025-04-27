import React from "react";

// Define and export the props interface for the MediaCard component
export interface MediaCardProps {
  title: string;
  description: string;
  image?: string | React.ReactNode; // Image can be a URL string or a React node
  onClick?: () => void; // Optional click handler
  icon?: React.ReactNode; // Optional icon node
  className?: string; // Optional additional class names
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  description,
  image,
  onClick,
  icon,
  className = "",
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault(); // Prevent default space bar scroll
      onClick();
    }
  };

  return (
    <div
      className={`media-card ${className}`.trim()} // Ensure class names are trimmed
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined} // Make it focusable only if clickable
      aria-label={title}
      role={onClick ? "button" : undefined} // Assign role only if clickable
      onKeyDown={onClick ? handleKeyDown : undefined} // Attach keydown handler only if clickable
      style={{ cursor: onClick ? "pointer" : "default" }} // Set cursor style based on clickability
    >
      {image && (
        <div className="media-card-image">
          {typeof image === "string" ? <img src={image} alt={title} /> : image}
        </div>
      )}
      {icon && <div className="media-card-icon">{icon}</div>}{" "}
      {/* Changed class for clarity */}
      <div className="media-card-content">
        {" "}
        {/* Added a content wrapper */}
        <div className="media-card-title">{title}</div>
        <div className="media-card-description">{description}</div>
      </div>
    </div>
  );
};

export default MediaCard;
