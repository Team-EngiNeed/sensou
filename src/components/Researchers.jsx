import React from "react";
import "../styles/Researchers.css";
import nico from "../assets/NICO.png";
import jovel from "../assets/JOVEL.png";
import celine from "../assets/CELINE.png";
import jaira from "../assets/JAIRA.png";
import computer from "../assets/computer.png";
import phone from "../assets/phone.png";
import menu from "../assets/menu.png";
import leader from "../assets/leader.png";

const Researchers = () => {
  return (
    <div className="researchers" id="researchers">
      <div className="researcher">
        <img src={nico} alt="" />
        <div className="caption">
          <img src={computer} alt="" />
          <p>Head of Website Development</p>
        </div>
      </div>
      <div className="researcher">
        <img src={celine} alt="" />
        <div className="caption">
          <img src={phone} alt="" />
          <p>Head of App Development</p>
        </div>
      </div>

      <div className="researcher">
        <img src={jaira} alt="" />
        <div className="caption">
          <img src={menu} alt="" />
          <p>UI Designer</p>
        </div>
      </div>

      <div className="researcher">
        <img src={jovel} alt="" />
        <div className="caption">
          <img src={leader} alt="" />
          <p>Team Leader</p>
        </div>
      </div>
    </div>
  );
};

export default Researchers;
