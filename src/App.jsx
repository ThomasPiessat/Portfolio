import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx"
import ProjectsShow from './components/Projects/ProjectsShow.jsx';
import PersonalProjectsPage from "./components/Projects/ProjectsPages/PersonalProjectsPage.jsx";
import ProfessionalProjectsPage from "./components/Projects/ProjectsPages/ProfessionalProjectsPage.jsx";
import StudentProjectsPage from "./components/Projects/ProjectsPages/StudentProjectsPage.jsx";
import { projects } from "./projectsData.js";
import DetailedProjectPage from './components/Projects/ProjectsPages/DetailedProjectPage.jsx';
import Footer from "./components/Footer/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from './pre.json';
import './style.css';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Router>
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectsShow />} />
        <Route path="/project/PersonalProject" element={<PersonalProjectsPage />} />
        <Route path="/project/ProfessionalProject" element={<ProfessionalProjectsPage />} />
        <Route path="/project/StudentProject" element={<StudentProjectsPage />} />
        <Route path="/project/:title" element={<DetailedProjectPage projects={projects} />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
  </Router>
  );
}

export default App;