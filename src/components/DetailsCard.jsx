import React from "react";

const DetailsCard = ({ subText, mainText }) => {
  return (
    <div className="details-card">
      <div className="text">
        <h4>{subText}</h4>
        <h2>{mainText}</h2>
      </div>
    </div>
  );
};

export default DetailsCard;
