import React, { Component } from 'react';
import '../styles.css';

import '../components/Sidebar'
import MainBG from '../components/MainBG';
import Header from '../components/Header';
import TitleCard from '../components/TitleCard';

class Main extends Component{
  render(){
    return(
      <div>
        <MainBG />
        <Header />
        <TitleCard />
      </div>
    );    
  }
  /*
  const [isVisible, setVisible] = React.useState(false);
  function handleClick(){
    console.log("dsfsd");
    setVisible(v => !v);
  }

  return (
    <div>
      <Header />
      <div className="background" />
      <Sidebar />
      <div className="comp">
        <header className="header">
          <button onClick={handleClick} className="button">gay</button>
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <p>fdsfdp</p>
          </div>
        </header>
      </div>
      <div align-items="center" justify-content="center">
      </div>
      <Block>
        
      </Block>
      <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
    </div>
  );*/
}


export default Main;
