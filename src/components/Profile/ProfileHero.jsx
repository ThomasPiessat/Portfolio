import React from "react";
import { Container } from "react-bootstrap";
import { profile } from "../../profileData";
import "./Profile.css";

export default function ProfileHero() {
  return (
    <section className="home-wrapper">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <h1 className="home-title">{profile.name}</h1>
          <h2 className="home-subtitle">{profile.role}</h2>
          <p className="home-company">
            Working for{" "}
            <a
              href={profile.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <span className="company-name">{profile.company.name}</span>
            </a>
          </p>
          <p className="home-tagline">{profile.tagline}</p>
        </Container>
      </Container>
    </section>
  );
}
