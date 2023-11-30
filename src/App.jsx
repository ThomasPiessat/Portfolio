import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import ExperienceBox from './components/Experiences/ExperienceBox.jsx';
import ProjectBox from './components/ProjectBox.jsx';
import PersonalProjectsPage from './components/ProjectsPages/PersonalProjectsPage.jsx';
import ProjectsShow from './components/ProjectsShow.jsx';

// import ProfessionalProjectsPage from './components/ProjectsPages/ProfessionalProjectsPage';
// import StudentProjectsPage from './components/ProjectsPages/StudentProjectsPage';

// LEGALS
import Mentions from "./components/pages/Legals/Mentions.jsx";

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const personalProjects = [
  { id: 1, title: 'Procedural Content Generation', description: 'Procedural City Generation', images: [] },
  { id: 2, title: 'Personnal P2', description: 'Personnal P2 description', images: [] },
  { id: 3, title: 'Personnal P3', description: 'Personnal P3 description', images: [] },
];

const professionalProject = [
  { id: 1, title: 'Professional', description: 'Professional', images: [] },
  { id: 2, title: 'Professional  P2', description: 'Professional P2 description', images: [] },
  { id: 3, title: 'Professional P3', description: 'Professional P3 description', images: [] },
];


const AllPersonalProjectsBox = () => (
  <div style={styles}>
    {personalProjects.map((project) => (
      <ProjectBox key={project.id} title={project.title} description={project.description} images={project.images} projectType="Personal Projects" />
    ))}
  </div>
);

const AllProfessionalProjectsBox = () => (
  <div style={styles}>
    {professionalProject.map((project) => (
      <ProjectBox key={project.id} title={project.title} description={project.description} images={project.images} projectType="Personal Projects" />
    ))}
  </div>
);

const App = () => (
  <div>
    <nav className="navbar"> 
      <Navbar />
    </nav>
    <main>
      <ProfileDescription />
      <ExperienceBox/>
      <ToolsUsed />
      <Routes>
          <Route path="/all-personal-projects" element={<AllPersonalProjectsBox />} />
          <Route path="/all-professional-projects" element={<AllProfessionalProjectsBox />} />
      </Routes>
      <div style={styles}>
          {/* <Link to="/all-personal-projects">All Personal Projects</Link>
          <Link to="/all-professional-projects">All Professional Projects</Link> */}
          <a href="/all-professional-projects"><ProjectsShow title="Professional Projects"></ProjectsShow></a>
          <a href="/all-personal-projects"><ProjectsShow title="Personal Projects"></ProjectsShow></a>
          <a href="/all-student-projects"><ProjectsShow title="Student Projects"></ProjectsShow></a>
      </div>
    </main>
    <footer>
        <p>Copyright information and other legal information</p>
      </footer>
  </div>
);

export default App;