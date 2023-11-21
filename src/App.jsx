import './App.css'
import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import Experience from './components/Experience.jsx';
import ProjectBox from './components/ProjectBox.jsx';

import PCG_Overview from './assets/img/PCG/CityAlongsideRoad.png'
import PCG_CirtyGeneration from './assets/img/PCG/CityGeneration.png'
import PCG_CityRoad from './assets/img/PCG/CityAlongsideRoad.png'

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const personalProjectImages = [PCG_Overview,PCG_CirtyGeneration,PCG_CityRoad ];

function App() {

  return (
    <body>
      <div>
        <nav class="navbar">
          <Navbar />
        </nav>
        <main>
          <ProfileDescription />
          <div style={styles}>
            <Experience title="Education" xpTitle={"Objectif 3D - Gameplay programmer"} date={"2017-2020"} location={"Montpellier, France"}/>
            <Experience title="Professional Experience" xpTitle={"Software Engineer"} date={"2020-Present"} location={"Black Shamrock - a Virtuos Studio, Dublin"}/>
         </div>
          <ToolsUsed />
          <div style={styles}>
           <ProjectBox title="Personal Project" description={"Projects that I did during my free time"} images={personalProjectImages}/>
           <ProjectBox title="Professional Project" description={"Projects that I did in studios"} />
           <ProjectBox title="Student Project" description={"Projects that I did during my studies"} />
         </div>
        </main>
        <footer>
        <p>Copyright information and other legal information</p>
      </footer>
      </div>
    </body>
  );
}

export default App;