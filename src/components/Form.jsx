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

const sections = [
  "Marasigan",
  "Descartes",
  "Riemann",
  "Euler",
  "Nebres",
  "Pythagoras",
  "Lamarck",
  "Darwin",
  "Alcala",
  "Mendel",
  "Pasteur",
  "Velasquez",
  "Dalton",
  "Del Mundo",
  "Newton",
  "Quisumbing",
  "Rutherford",
  "Ampere",
  "Belardo",
  "Einstein",
  "Zara",
  "Aristotle",
  "Confucius",
  "Laotzu",
  "Plato",
  "Socrates",
  "Hobbes",
  "Locke",
  "More",
  "Rousseau",
  "Voltaire",
];

const roles = [
  "President",
  "Vice President",
  "Secretary",
  "Engineer",
  "Admin",
  "Principal",
  "Nurse",
  "Librarian",
  "Labtech",
  "Utility",
  "Adviser",
];

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";
  const name2 = method === "login" ? "Register" : "Login";
  const link = method === "login" ? "register" : "login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload =
        method === "register"
          ? { username, password, section, role }
          : { username, password };

      const res = await api.post(route, payload);

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        if (username.includes("Executive")) {
          navigate("/executive");
        } else if (username.includes("Adviser")) {
          navigate("/adviser");
        } else if (username.includes("Engineer")) {
          navigate("/engineer");
        } else if (username.includes("Utility")) {
          navigate("/utility");
        } else if (username.includes("Labtech")) {
          navigate("/labtech");
        } else if (username.includes("Librarian")) {
          navigate("/librarian");
        } else if (username.includes("Nurse")) {
          navigate("/nurse");
        } else {
          navigate("*");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="form-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="contact" id="contact">
        <div className="contact-col">
          <h3>
            {name} now <img src={app_register} alt="" />
          </h3>
          <p>
            Login now to gain full access to our website, where you can easily
            submit detailed reports regarding broken school supplies directly to
            our engineers. ...
          </p>
          <ul>
            <li>
              <img src={msg} alt="" /> teamengineed@gmail.com
            </li>
            <li>
              <img src={call} alt="" /> +63987541354
            </li>
            <li>
              <img src={login} alt="" />{" "}
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
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {method === "register" && (
              <>
                <select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  required
                >
                  <option value="">Select Section</option>
                  {sections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </>
            )}

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
