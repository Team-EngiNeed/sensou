import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import logo from "../assets/ENGINEED LOGO.png";
import menu from "../assets/menu.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const renderLinks = () => {
    switch (location.pathname) {
      case "/executive":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/executive-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/executive-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Transaction"
                smooth={true}
                offset={0}
                duration={500}
              >
                Send us an Order
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/executive" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/adviser":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/adviser-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/adviser-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/adviser" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/engineer":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/engineer-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/engineer-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/engineer" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/nurse":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/nurse-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/nurse-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Transaction"
                smooth={true}
                offset={0}
                duration={500}
              >
                Send us an Order
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/nurse" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/labtech":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/labtech-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/labtech-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Transaction"
                smooth={true}
                offset={0}
                duration={500}
              >
                Send us an Order
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/labtech" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/librarian":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/labtech-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/librarian-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Transaction"
                smooth={true}
                offset={0}
                duration={500}
              >
                Send us an Order
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/labtech" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      case "/utility":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="researchers"
                smooth={true}
                offset={-260}
                duration={500}
              >
                Researchers
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/engineer-orders" className="btn">
                Order
              </RouterLink>
            </li>
          </>
        );
      case "/utility-orders":
        return (
          <>
            <li>
              <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="dashboard"
                smooth={true}
                offset={0}
                duration={500}
              >
                Dashboard
              </ScrollLink>
            </li>
            <li>
              <RouterLink to="/logout">Log Out</RouterLink>
            </li>
            <li>
              <RouterLink to="/engineer" className="btn">
                Home
              </RouterLink>
            </li>
          </>
        );
      default:
        return (
          <li>
            <RouterLink to="/">Back to Home</RouterLink>
          </li>
        );
    }
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>{renderLinks()}</ul>
      <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
