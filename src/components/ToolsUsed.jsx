import React from 'react';
import './ToolsUsed.css';
import VS_Icon from '../assets/img/ICO/visual-basic.png'
import VSCode_Icon from '../assets/img/ICO/visual-code.png'
import C_Icon from '../assets/img/ICO/c.png'
import CPP_Icon from '../assets/img/ICO/cpp.png'
import CSharp_Icon from '../assets/img/ICO/c-sharp.png'
import UE_Icon from '../assets/img/ICO/unreal-engine.png'
import Unity_Icon from '../assets/img/ICO/unity.png'
import Git_Icon from '../assets/img/ICO/github.png'
import Perforce_Icon from '../assets/img/ICO/perforce (1).png'
import Vue_Icon from '../assets/img/ICO/vue.png'
import React_Icon from '../assets/img/ICO/react.png'

const toolsData = [
  { icon: VS_Icon, alt: 'visual-basic', text: 'VS' },
  { icon: VSCode_Icon, alt: 'visual-code', text: 'VSCode' },
  { icon: C_Icon, alt: 'c', text: 'C' },
  { icon: CPP_Icon, alt: 'cpp', text: 'C++' },
  { icon: CSharp_Icon, alt: 'c-sharp', text: 'C#' },
  { icon: UE_Icon, alt: 'ue', text: 'UE4' },
  { icon: Unity_Icon, alt: 'unity', text: 'Unity' },
  { icon: Git_Icon, alt: 'git-sharp', text: 'Git' },
  { icon: Perforce_Icon, alt: 'perforce', text: 'P4V' },
  { icon: Vue_Icon, alt: 'vue', text: 'Vue' },
  { icon: React_Icon, alt: 'react', text: 'React' },
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