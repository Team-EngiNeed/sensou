import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Orders.css";
import Note from "../components/Note";
import arrow from "../assets/arrow.png";
import bgImage from "../assets/CANTEEN.jpg";

function Orders() {
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
          Welcome to the Orders page! Here, you can view the list of orders that
          have been made by the students of Valenzuela City School of
          Mathematics and Science.
        </p>
        <button className="btn">
          <ScrollLink to="dashboard" smooth={true} offset={0} duration={500}>
            Explore more <img src={arrow} alt="" />
          </ScrollLink>
        </button>
      </div>
    </div>
  );
}

export default Orders;
