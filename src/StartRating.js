import React, { useState } from "react";

const StarRating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleStarClick(starValue)}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              border: "none",
              color: starValue <= selectedStars ? "gold" : "gray",
            }}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
