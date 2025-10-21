import React from "react";
import ProfileHero from "../Profile/ProfileHero";
import Experiences, { defaultExperiences } from "../About/Experiences/Experiences";
import Home2 from "./Home2";
import "./Home.css";

function Home() {
  return (
    <>
    <ProfileHero />
    <Experiences data={defaultExperiences} compact />
    <Home2 />
  </>
  );
}

export default Home;
