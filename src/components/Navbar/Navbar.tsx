import { useState, useEffect } from 'react';
import "./Navbar.css";
import {useScrollSpy} from "../../hooks/useScrollSpy.ts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = ["home", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, {
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "is-open" : ""
      }`}
    >
      <div className={"navbar-logo"}>
        <a
          href={"#home"}
          className={activeSection === "home" ? "active" : ""}
        >Eduardo Martins</a>
      </div>
      <button
        className={"menu-toggle"}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : " Open menu"}
        aria-expanded={isMenuOpen}
      >
        <div className={"hamburger-icon"}></div>
      </button>

      <ul className={"navbar-links"}>
        <li>
          <a
            href={"#projects"}
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href={"#contact"}
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={"/resume.pdf"}
            target={"_blank"}
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;