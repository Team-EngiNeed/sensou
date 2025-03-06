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
          To enhance the learning experience, we have developed an app that
          offers a more reliable and seamless way to access our platform.
          Designed for improved accessibility and usability, our app ensures a
          smoother and more efficient interaction with our services. It is
          user-friendly and supports real-time order processing, providing a
          faster and more convenient experience. Currently, the app is available
          for Windows and Android devices. You can download it using the link
          below.
        </p>
        <p>
          Unfortunately, we are not able to provide services to Apple users at
          the moment. We are working on it and will be available soon. In the
          meantime, we recommend using a Windows or Android device to access our
          service through this link{" "}
          <a
            href="https://drive.google.com/file/d/1uaV8MM-thYDmwfF3w9R3JqRJgbBXrgin/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me!
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
