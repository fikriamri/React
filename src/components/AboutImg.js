import React from "react";
import "./AboutImg.css";
import hamilton from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import dot from "../img/img-dot.png";

function AboutImage() {
  return (
    <div className="image-about">
      <img src={hamilton} alt="" className="about-me-img" />
      <img src={dot} alt="" className="dot" />
    </div>
  );
}

export default AboutImage;
