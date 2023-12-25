// Import all images
import PCG_Overview from './assets/img/PCG/CityAlongsideRoad.png'
import PCG_CirtyGeneration from './assets/img/PCG/CityGeneration.png'
import PCG_CityRoad from './assets/img/PCG/CityAlongsideRoad.png'
//sudent
//accel
import Accel_Overview from './assets/img/studentsProjects/accel/accelSteam.jpg'
import Accel_Gameplay1 from './assets/img/studentsProjects/accel/accelGameplay.jpg'
import Accel_Gameplay2 from './assets/img/studentsProjects/accel/accelGameplay2.jpg'
//pro
//gundam
import GundamEvo_Overview from './assets/img/professionalProjects/gundamEvolution/GundamEvo_Overview.jpg'
//ksp2
import KSP2_Overview from './assets/img/professionalProjects/ksp2/ksp2_Overview.jpg'
// Import all icons
import VS_Icon from '../src/assets/img/ICO/visual-basic.png'
import VSCode_Icon from '../src/assets/img/ICO/visual-code.png'
import C_Icon from '../src/assets/img/ICO/c.png'
import CPP_Icon from '../src/assets/img/ICO/cpp.png'
import CSharp_Icon from '../src/assets/img/ICO/c-sharp.png'
import UE_Icon from '../src/assets/img/ICO/unreal-engine.png'
import Unity_Icon from '../src/assets/img/ICO/unity.png'
import Git_Icon from '../src/assets/img/ICO/github.png'
import Perforce_Icon from '../src/assets/img/ICO/perforce (1).png'
import Vue_Icon from '../src/assets/img/ICO/vue.png'
import React_Icon from '../src/assets/img/ICO/react.png'

// Export all images
export const imagesPerso = {
    PCG_Overview,
    PCG_CirtyGeneration,
    PCG_CityRoad
};

export const imagesPro = {
    GundamEvo_Overview,
    KSP2_Overview
}

export const imagesStud = {
    Accel_Overview ,
    Accel_Gameplay1,
    Accel_Gameplay2
}

// Export all icons
export const icons = {
    VS_Icon,
    VSCode_Icon,
    C_Icon,
    CPP_Icon,
    CSharp_Icon,
    UE_Icon,
    Unity_Icon,
    Git_Icon,
    Perforce_Icon,
    Vue_Icon,
    React_Icon,
}

export const projects = [
    {
        id: 1,
        title: 'Accel',
        projectType: 'StudentProject',
        engine: 'Unreal Engine 4',
        language: 'Blueprint',
        team: '3 programmers, 5 graphic designers, 1 game designer, 2 sound designers',
        time: '3 months',
        period: 'April - June 2018',
        aboutTheGame: "ACCEL is an arcade runner and scorer game in a cyber world. You are going to control a spaceship through different levels and in order to win you will have to dodge obstacles by moving left and right but it's also possible to make 360 degrees maneuverability. My role in this project has been in the first place to prototype a spaceship with shooting mecanics and a barrel role. But with the time that was given to us we could not consider these options. So I was in charge to work on the UI menu, all of the options system (change the different volume), the HUD in game and the collectible system, I integrated some of the animations as well. This project brought me in my first production of a video game with all profession fields. Even if it's a students project, we worked with real studio's conditions. That is to say communicate with co-workers to reach the attempts of the team. ",
        images: [
          imagesStud.Accel_Overview,
          imagesStud.Accel_Gameplay1,
          imagesStud.Accel_Gameplay2,
        ]
    },
    {
        id: 2,
        title: 'GundamEvolution',
        projectType: 'ProfessionalProject',
        engine: 'Unreal Engine 4',
        language: 'C++/Blueprint',
        team: '',
        time: '',
        period: '',
        aboutTheGame: '',
        images: [
            imagesPro.GundamEvo_Overview
          ]
      },
      {
        id: 3,
        title: 'Kerbal Space Program 2',
        projectType: 'ProfessionalProject',
        engine: 'Unity',
        language: 'C#',
        team: '',
        time: '',
        period: '',
        aboutTheGame: '',
        images: [
            imagesPro.KSP2_Overview
          ]
        },
  ];