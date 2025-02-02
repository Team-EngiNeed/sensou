import React, { useState } from "react";
import "../styles/Contact.css";
import msg from "../assets/msg.png";
import cntc from "../assets/cntc.png";
import call from "../assets/call.png";
import location from "../assets/location.png";
import arrow from "../assets/arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target); // Automatically infers the form element

    formData.append("access_key", "560ee215-3550-4454-8a89-e65cfa7e0a25");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset(); // Resets the form fields
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setResult("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={cntc} alt="" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to
          Valmascians.
        </p>
        <ul>
          <li>
            <img src={msg} alt="" />
            teamengineed@gmail.com
          </li>
          <li>
            <img src={call} alt="" />
            +63987541354
          </li>
          <li>
            <img src={location} alt="" />
            Grade 12 - More
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Grade and Section</label>
          <input
            type="text"
            name="gns"
            placeholder="Enter your Grade and Section"
            required
          />
          <label>Write your Message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn" type="submit">
            Submit now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
