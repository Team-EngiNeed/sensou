import React from "react";
import { Navigate } from "react-router-dom";

const roles = [
  "president",
  "vice president",
  "secretary",
  "engineer",
  "admin",
  "principal",
  "nurse",
  "librarian",
  "labtech",
  "utility",
  "adviser",
];

const sections = [
  "marasigan",
  "descartes",
  "riemann",
  "euler",
  "nebres",
  "pythagoras",
  "lamarck",
  "darwin",
  "alcala",
  "mendel",
  "pasteur",
  "velasquez",
  "dalton",
  "del mundo",
  "newton",
  "quisumbing",
  "rutherford",
  "ampere",
  "belardo",
  "einstein",
  "zara",
  "aristotle",
  "confucius",
  "laotzu",
  "plato",
  "socrates",
  "hobbes",
  "locke",
  "more",
  "rousseau",
  "voltaire",
];

function RedirectHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.role) {
    return <Navigate to="/login" replace />;
  }

  const role = user.role.toLowerCase();
  const section = user.section ? user.section.toLowerCase() : null;

  let homePath = "/login";

  if (roles.includes(role)) {
    if (
      ["engineer", "utility", "labtech", "librarian", "nurse"].includes(role)
    ) {
      homePath = `/${role}`;
    } else if (role === "adviser" && section && sections.includes(section)) {
      homePath = "/adviser";
    } else if (
      [
        "admin",
        "principal",
        "president",
        "vice president",
        "secretary",
      ].includes(role)
    ) {
      homePath = "/executive";
    }
  }

  return <Navigate to={homePath} replace />;
}

export default RedirectHome;
