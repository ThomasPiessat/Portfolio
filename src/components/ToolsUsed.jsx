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
/*import React_Icon from '../assets/img/ICO/React.png'*/

function ToolsUsed() {
  return (
    <div class="tools-container">
      <h1>Tools Used</h1>
      <ul>
        <div class="tool-container">        
          <img src={VS_Icon} alt="visual-basic" class="tool-image"></img>
          <div class="tool-text">VS</div>
        </div>
        <div class="tool-container">
          <img src={VSCode_Icon} alt="visual-code" class="tool-image"></img>
          <div class="tool-text">VSCode</div>
        </div>
        <div class="tool-container">
          <img src={C_Icon} alt="c" class="tool-image"></img>
          <div class="tool-text">C</div>
        </div>
        <div class="tool-container">
          <img src={CPP_Icon} alt="cpp" class="tool-image"></img>
          <div class="tool-text">C++</div>
        </div>
        <div class="tool-container">
          <img src={CSharp_Icon} alt="c-sharp" class="tool-image"></img>
          <div class="tool-text">C#</div>
        </div>
        <div class="tool-container">
          <img src={UE_Icon} alt="ue" class="tool-image"></img>
          <div class="tool-text">UE4</div>
        </div>
        <div class="tool-container">
          <img src={Unity_Icon} alt="unity" class="tool-image"></img>
          <div class="tool-text">Unity</div>
        </div>
        <div class="tool-container">
          <img src={Git_Icon} alt="git-sharp" class="tool-image"></img>
          <div class="tool-text">Git</div>
        </div>
        <div class="tool-container">
          <img src={Perforce_Icon} alt="perforce" class="tool-image"></img>
          <div class="tool-text">P4V</div>
        </div>
        <div class="tool-container">
          <img src={Vue_Icon} alt="vue" class="tool-image"></img>
          <div class="tool-text">Vue</div>
        </div>
      </ul>
    </div>
  );
}

export default ToolsUsed;