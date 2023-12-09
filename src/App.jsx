import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import ProjectsShow from './components/ProjectsPages/ProjectsShow.jsx';
import Projects from './components/ProjectsPages/Projects.jsx';

// LEGALS
import Mentions from "./components/pages/Legals/Mentions.jsx";

const App = () => (
  <div>
    <nav className="navbar"> 
      <Navbar />
    </nav>
    <main>
      <ProfileDescription />
      <Experiences />
      <ToolsUsed />
      <ProjectsShow />
      <Routes>
        <Route path="/projects/*" element={<Projects />} />
      </Routes>
    </main>
    <footer>
        <p>Copyright information and other legal information</p>
      </footer>
  </div>
);

export default App;