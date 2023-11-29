import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

import projectsData from "./projectsData";
import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import Experience from './components/Experience.jsx';
import ProjectBox from './components/ProjectBox.jsx';
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
  { id: 1, title: 'Procedural Content Generation', description: 'Procedural City Generation', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
  { id: 2, title: 'Personnal P2', description: 'Personnal P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
  { id: 3, title: 'Personnal P3', description: 'Personnal P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
];

const professionalProject = [
  { id: 1, title: 'Professional', description: 'Professional', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
  { id: 2, title: 'Professional  P2', description: 'Professional P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
  { id: 3, title: 'Professional P3', description: 'Professional P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
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
      <div style={styles}>
        <Experience title="Education" xpTitle={"Objectif 3D - Gameplay programmer"} date={"2017-2020"} location={"Montpellier, France"} />
        <Experience title="Professional Experience" xpTitle={"Software Engineer"} date={"2020-Present"} location={"Black Shamrock - a Virtuos Studio, Dublin"} />
      </div>
      <ToolsUsed />
      <Routes>
          <Route path="/all-personal-projects" element={<AllPersonalProjectsBox />} />
          <Route path="/all-professional-projects" element={<AllProfessionalProjectsBox />} />
      </Routes>
      <div style={styles}>
          <Link to="/all-personal-projects">All Personal Projects</Link>
          <Link to="/all-professional-projects">All Professional Projects</Link>
      </div>
    </main>
    <footer>
        <p>Copyright information and other legal information</p>
      </footer>
  </div>
);

export default App;