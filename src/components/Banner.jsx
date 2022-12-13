import React from "react";
import portal from "/portal.svg";
import play from "/play.svg";

const Banner = () => {
  return (
    <div className="container">
      <div className="mbl-area banner">
        <div className="banner-area">
          <div className="top-content">
            <img className="gun" src="/gun.svg" alt="gun" />
            <img className="bubble" src="/bubble.svg" alt="bubble" />
            <h1>
              THE{" "}
              <span>
                <img src={portal} alt="portal" />
              </span>{" "}
              <span className="color-text">
                RICK & <br /> MORTY
              </span>
              WIKI{" "}
            </h1>
            <span className="text-overlay">
              <img
                className="title-shadow"
                src="/titleshadow.svg"
                alt="title shadow"
              />
            </span>
          </div>
          <div className="footer-text">
            <button className="banner-btn">
              <img src={play} alt="play-icon" />
              Watch Now
            </button>
            <p>
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
