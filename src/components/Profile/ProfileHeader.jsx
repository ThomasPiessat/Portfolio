import React from "react";
import { profile } from "../../profileData";
import "./Profile.css";

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      <h1 className="profile-title">{profile.name} — {profile.role}</h1>
      <p className="profile-company">
        Working for{" "}
        <a href={profile.company.url} target="_blank" rel="noopener noreferrer" className="company-link">
          <span className="company-name">{profile.company.name}</span>
        </a>
      </p>
    </header>
  );
}
