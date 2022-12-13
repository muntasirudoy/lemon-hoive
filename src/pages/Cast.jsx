import React from "react";
import Logo from "../components/Logo";
import AllCast from "../components/AllCast";
import PositionShape from "../components/PositionShape";
const Cast = () => {
  return (
    <div className="main cast">
      <div className="bg-images">
        <div className="container">
          <Logo />
          <AllCast />
        </div>
      </div>
      <PositionShape />
    </div>
  );
};

export default Cast;
