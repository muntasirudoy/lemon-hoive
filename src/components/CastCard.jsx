import React from "react";
import { Link } from "react-router-dom";

const CastCard = ({ charName, image, id }) => {
  return (
    <div className="cast-card">
      <div className="image">
        <img src={image} alt="cast" />
      </div>
      <div className="text">
        <Link to={`../cast-details/${id}`}>
          <h2>{charName}</h2>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CastCard;
