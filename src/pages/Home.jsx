import "../App.css";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import MeetTheCast from "../components/MeetTheCast";
import React from "react";
import Episode from "../components/Episode";
import Locations from "../components/Locations";
import PositionShape from "../components/PositionShape";
function Home() {
  return (
    <div className="main home">
      <div className="bg-images">
        <div className="container">
          <Logo />
          <Banner />
          <MeetTheCast />
          <Episode />
          <Locations />
        </div>
      </div>
      <PositionShape />
    </div>
  );
}

export default Home;
