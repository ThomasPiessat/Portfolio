import React from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import ProfileDescription from './components/ProfileDescription.jsx';
import ToolsUsed from './components/ToolsUsed.jsx';
import Experience from './components/Experience.jsx';
import ProjectBox from './components/ProjectBox.jsx';
import VSCode_Icon from './assets/img/PCG/Overview.png'

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

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
           <ProjectBox title="Personal Project" description={"Projects that I did during my free time"} />
           <ProjectBox title="Professional Project" description={"Projects that I did in studios"} images={VSCode_Icon}/>
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