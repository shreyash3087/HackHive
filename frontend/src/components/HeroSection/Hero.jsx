import React from "react";
import "./Hero.css";
import image13 from "../../assets/image13.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 >Transforming Opportunities:</h1>
        <h1>
          <span>Empower Builders</span> with <span>Hackathons</span>.
        </h1>
      </div>
      <div className="hero-img">
        <img src={image13} alt="" />
      </div>
    </div>
  );
}
