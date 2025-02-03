import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import arrow from "../assets/arrow.png";
import msg from "../assets/msg.png";
import call from "../assets/call.png";
import app_register from "../assets/app_regis.png";
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import bgImage from "../assets/LIKOD.jpg";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";
  const name2 = method === "login" ? "Register" : "Login";
  const link = method === "login" ? "register" : "login";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      console.log("API response:", res); // Debugging the API response

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        console.log("Logged in as:", username);

        // Check if the username contains "President"
        if (username.includes("Executive")) {
          console.log("Redirecting to executive route");
          setTimeout(() => {
            navigate("/executive"); // Redirect to a president-specific route
          }, 100); // Added setTimeout for debugging
        } else if (username.includes("Adviser")) {
          console.log("Redirecting to adviser route");
          setTimeout(() => {
            navigate("/adviser"); // Redirect to a president-specific route
          }, 100);
        } else if (username.includes("Engineer")) {
          console.log("Redirecting to engineer route");
          setTimeout(() => {
            navigate("/engineer"); // Redirect to a president-specific route
          }, 100);
        } else if (username.includes("Utility")) {
          console.log("Redirecting to utility route");
          setTimeout(() => {
            navigate("/utility"); // Redirect to a president-specific route
          }, 100);
        } else if (username.includes("Labtech")) {
          console.log("Redirecting to lacbtech route");
          setTimeout(() => {
            navigate("/labtech"); // Redirect to a president-specific route
          }, 100);
        } else if (username.includes("Librarian")) {
          console.log("Redirecting to librarian route");
          setTimeout(() => {
            navigate("/librarian"); // Redirect to a president-specific route
          }, 100);
        } else if (username.includes("Nurse")) {
          console.log("Redirecting to nurse route");
          setTimeout(() => {
            navigate("/nurse"); // Redirect to a president-specific route
          }, 100);
        } else {
          console.log("Redirecting to 404 page");
          setTimeout(() => {
            navigate("*"); // Redirect to the home page for regular users
          }, 100); // Added setTimeout for debugging
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="form-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="contact" id="contact">
        <div className="contact-col">
          <h3>
            {name} now <img src={app_register} alt="" />
          </h3>
          <p>
            Login now to gain full access to our website, where you can easily
            submit detailed reports regarding broken school supplies directly to
            our engineers. Our team is dedicated to ensuring that all reported
            issues are promptly addressed and resolved to maintain the
            functionality and quality of school resources. If you already don't
            have an account, simply click the link below to be redirected to the
            registration page and continue using our services seamlessly. We’re
            here to help ensure that every student and educator has access to
            fully functional supplies and equipment!
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
              <img src={login} alt="" />
              <Link to={`/${link}`}>{name2} here</Link>
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button type="submit" className="btn">
              {name} <img src={arrow} alt="" />
              {loading && <LoadingIndicator />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
