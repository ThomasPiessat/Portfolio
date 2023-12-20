import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx"
import ProjectsShow from './components/ProjectsPages/ProjectsShow.jsx';
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
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
  </Router>
  );
}

export default App;