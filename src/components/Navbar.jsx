import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function AccentSwitcher() {
  const { accent, setAccent } = useTheme();
  const options = ["purple", "teal", "gold", "rose", "lime"];
  return (
    <div className="accent-switch" role="group" aria-label="Accent color">
      {options.map(opt => (
        <button
          key={opt}
          className={`accent-dot ${opt} ${accent === opt ? "active" : ""}`}
          onClick={() => setAccent(opt)}
          title={opt}
          aria-pressed={accent === opt}
        />
      ))}
    </div>
  );
}
function NavBar() {
  const [updateExpanded] = useState(false);
  const { i18n, t } = useTranslation(); // t used for link labels if you localize them
  const currentLang = i18n.resolvedLanguage || i18n.language;
  const { theme, toggleTheme } = useTheme();

  return (
      <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
        <Container className="nav-inner">
          <Navbar.Brand as={Link} to="/" className="navbar-brand-text">
            <h1>Thomas Piessat</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links ms-auto">
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <span>{t("nav.about", { defaultValue: "About" })}</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <span>{t("nav.projects", { defaultValue: "Projects" })}</span>
              </Nav.Link>

              <Nav.Link
                href="https://github.com/ThomasPiessat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github</span>
              </Nav.Link>
            </Nav>

            {/* Language switch on the far right */}

          <div className="right-controls">
            <div className="language-switch" role="group" aria-label="Language">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
                aria-pressed={currentLang === "en"}
              >
                us EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("fr")}
                className={`lang-btn ${currentLang === "fr" ? "active" : ""}`}
                aria-pressed={currentLang === "fr"}
              >
                🇫🇷 FR
              </button>
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <AccentSwitcher />
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
