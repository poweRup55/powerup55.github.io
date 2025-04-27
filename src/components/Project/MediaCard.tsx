import React from "react";

export interface MediaCardProps {
  title: string;
  description: string;
  image?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
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
      event.preventDefault();
      onClick();
    }
  };

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
        </div>
      )}
      {icon && <div className="media-card-icon">{icon}</div>}
      <div className="media-card-content">
        <div className="media-card-title">{title}</div>
        <div className="media-card-description">{description}</div>
      </div>
    </div>
  );
};

export default MediaCard;
