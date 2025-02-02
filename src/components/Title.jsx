import React from "react";
import "../styles/Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title" id="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
