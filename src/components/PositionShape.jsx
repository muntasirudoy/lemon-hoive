import React from "react";
import blueShadowRight from "/shadow.png"; //rigth blue shadow
import blueShadowLeft from "/shadowleft.png"; // left bottom blue shadow
import spiral from "/spiral.svg"; // right bottom spiral
import star3 from "/star3.svg"; // right bottom star3
import star2 from "/star2.svg"; // right bottom star2
import star1 from "/star1.svg"; // right bottom star1
const PositionShape = () => {
  return (
    <>
      <img className="blueshadowleft" src={blueShadowLeft} alt="shadow" />
      <img className="blueshadowright" src={blueShadowRight} alt="shadow" />
      <img className="spiral" src={spiral} alt="spiral" />
      <img className="star3" src={star3} alt="star3" />
      <img className="star2" src={star2} alt="star2" />
      <img className="star1" src={star1} alt="star1" />
    </>
  );
};

export default PositionShape;
