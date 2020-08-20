import React, { Component } from 'react';
import '../styles.scss';

import MainBG from '../components/MainBG';
import TitleCard from '../components/TitleCard';
import IntroSection from './IntroSection';
import SkillsSection from "./SkillsSection";

class Main extends Component{
  render(){
    return(
      <main>
        <MainBG />
        <div className="main-wrapper">
          <TitleCard />
          <IntroSection />
          <SkillsSection />
        </div>
      </main>
    );    
  }

}


export default Main;
