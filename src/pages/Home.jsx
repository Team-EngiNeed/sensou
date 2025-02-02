import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import arrow from "../assets/arrow.png";
import "../styles/Home.css";
import { Link as ScrollLink } from "react-scroll";
import bgImage from "../assets/LIKOD.jpg";

function Home() {
  return (
    <div
      className="hero container"
      id="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="hero-text">
        <h1>
          <big>EngiNeed</big>: For a
          <b>
            <i> Better </i>
          </b>
          and
          <b>
            <i> Safer </i>
          </b>
          Learning Space
        </h1>
        <p>
          This web application has been developed to enhance the quality of the
          learning environment for the students of Valenzuela City School of
          Mathematics and Science.
        </p>
        <button className="btn">
          <ScrollLink
            to="researchers"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Explore more <img src={arrow} alt="" />
          </ScrollLink>
        </button>
      </div>
    </div>
  );
}

export default Home;
