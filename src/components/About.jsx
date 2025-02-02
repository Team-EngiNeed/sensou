import React from "react";
import "../styles/About.css";
import lab from "../assets/speechlab.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={lab} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ENGINEED</h3>
        <h2>For a Better and Safer Learning Space</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          ratione eius aliquid cupiditate a. Dolorum esse labore eligendi saepe
          perspiciatis accusantium aperiam deserunt ad, ratione sequi cupiditate
          unde nemo. Sint.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          ratione eius aliquid cupiditate a. Dolorum esse labore eligendi saepe
          perspiciatis accusantium aperiam deserunt ad, ratione sequi cupiditate
          unde nemo. Sint.
        </p>
      </div>
    </div>
  );
};

export default About;
