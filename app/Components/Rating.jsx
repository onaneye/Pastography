import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  // Ensure the rating is a valid number between 0 and 5
  const validRating = Math.max(0, Math.min(5, parseFloat(rating)));
  
  // Determine the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center my-2">
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="text-orange-500" />
      ))}
      
      {/* Render half star if applicable */}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-orange-500" />}
      
      {/* Render empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStarRegular} className="text-orange-500" />
      ))}
      
      {/* Display rating value */}
      <span className="ml-2 text-gray-600">{validRating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
