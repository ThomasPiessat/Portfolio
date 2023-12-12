import './App.css'

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import ProjectsShow from './components/ProjectsPages/ProjectsShow.jsx';
import PersonalProjectsPage from './components/ProjectsPages/PersonalProjectsPage.jsx'
import ProfessionalProjectsPage from './components/ProjectsPages/ProfessionalProjectsPage.jsx'
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
        <Route path="/projects/PersonalProject" element={<PersonalProjectsPage />} />
        <Route path="/projects/ProfesionalProject" element={<ProfessionalProjectsPage />} />
      </Routes>
    </main>
    {/* <footer>
        <p>Copyright information and other legal information</p>
    </footer> */}
  </div>
);

export default App;