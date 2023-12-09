import React from 'react';
import { icons } from '../projectsData';
import './ToolsUsed.css';

const toolsData = [
  { icon: icons.VS_Icon, alt: 'visual-basic', text: 'VS' },
  { icon: icons.VSCode_Icon, alt: 'visual-code', text: 'VSCode' },
  { icon: icons.C_Icon, alt: 'c', text: 'C' },
  { icon: icons.CPP_Icon, alt: 'cpp', text: 'C++' },
  { icon: icons.CSharp_Icon, alt: 'c-sharp', text: 'C#' },
  { icon: icons.UE_Icon, alt: 'ue', text: 'UE4/5' },
  { icon: icons.Unity_Icon, alt: 'unity', text: 'Unity' },
  { icon: icons.Git_Icon, alt: 'git-sharp', text: 'Git' },
  { icon: icons.Perforce_Icon, alt: 'perforce', text: 'P4V' },
  { icon: icons.Vue_Icon, alt: 'vue', text: 'Vue' },
  { icon: icons.React_Icon, alt: 'react', text: 'React' },
];

function ToolsUsed() {
  return (
    <div className="tools-container">
      <h1>Tools Used</h1>
      <ul>
      {toolsData.map((tool, index) => (
        <div className="tool-container" key={index}>
          <img src={tool.icon} alt={tool.alt} className="tool-image" />
          <div className="tool-text">{tool.text}</div>
        </div>
      ))}
    </ul>
    </div>
  );
}

export default ToolsUsed;