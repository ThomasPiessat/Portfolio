import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx"
import ProjectsShow from './components/Projects/ProjectsShow.jsx';
import ProfessionalProjectsPage from "./components/Projects/ProjectsPages/ProfessionalProjectsPage.jsx";
import StudentProjectsPage from "./components/Projects/ProjectsPages/StudentProjectsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectsShow />} />
        <Route path="/project/ProfessionalProject" element={<ProfessionalProjectsPage />} />
        <Route path="/project/StudentProject" element={<StudentProjectsPage />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
  </Router>
  );
}

export default App;