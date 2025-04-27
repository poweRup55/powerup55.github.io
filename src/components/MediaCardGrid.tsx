import React from "react";
import MediaCard from "./MediaCard";
// Import the props type from MediaCard
import { MediaCardProps } from "./MediaCard"; // Corrected import

// Define the props interface for MediaCardGrid
interface MediaCardGridProps {
  cards: MediaCardProps[]; // Use the imported type for the cards array
  className?: string;
}

const MediaCardGrid: React.FC<MediaCardGridProps> = ({
  cards,
  className = "",
}) => (
  <div className={`media-card-grid ${className}`.trim()}>
    {/* Ensure each card has a unique key, using index if no id is available */}
    {cards.map((card, idx) => (
      <MediaCard key={card.title || idx} {...card} /> // Use card title or index as key
    ))}
  </div>
);

export default MediaCardGrid;
