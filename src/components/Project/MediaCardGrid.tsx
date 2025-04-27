import React from "react";
import MediaCard from "./MediaCard";
import { MediaCardProps } from "./MediaCard";

interface MediaCardGridProps {
  cards: MediaCardProps[];
  className?: string;
}

const MediaCardGrid: React.FC<MediaCardGridProps> = ({
  cards,
  className = "",
}) => (
  <div className={`media-card-grid ${className}`.trim()}>
    {cards.map((card, idx) => (
      <MediaCard key={card.title || idx} {...card} />
    ))}
  </div>
);

export default MediaCardGrid;
