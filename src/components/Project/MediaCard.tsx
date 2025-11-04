import React from "react";
import "./Project.css";

export interface MediaCardProps {
  title: string;
  secondaryTitle?: string;
  description: string;
  image?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  secondaryTitle,
  description,
  image,
  onClick,
  icon,
  className = "",
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  const renderDescription = (desc: string) =>
    desc.split("\n").map((line, idx, arr) => (
      <React.Fragment key={idx}>
        {line}
        {idx < arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div
      className={`media-card ${className}`.trim()}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title}
      role={onClick ? "button" : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {image && (
        <div className="media-card-image">
          {typeof image === "string" ? <img src={image} alt={title} /> : image}
          <div className="media-card-overlay">
            <div className="media-card-overlay-content">
              <div className="media-card-title">{title}</div>
              {secondaryTitle && (
                <div className="media-card-subtitle">{secondaryTitle}</div>
              )}
              {/* description intentionally hidden on overlay */}
            </div>
          </div>
        </div>
      )}
      {icon && <div className="media-card-icon">{icon}</div>}
      <div className="media-card-mobileDesc">
        <div className="media-card-title">{title}</div>
        {secondaryTitle && (
          <div className="media-card-subtitle">{secondaryTitle}</div>
        )}
        {/* description intentionally hidden on mobile summary */}
      </div>
    </div>
  );
};

export default MediaCard;
