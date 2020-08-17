import React from 'react';
import '../styles.css';

import '../components/Sidebar'
import Sidebar from '../components/Sidebar';
import Block from '../components/Block';

function Main() {
  const [isVisible, setVisible] = React.useState(false);
  function handleClick(){
    console.log("dsfsd");
    setVisible(v => !v);
  }

  return (
    <div className="background">
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
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
        <p>sdfsdfdsfsd</p>
      </Block>
    </div>
  );
}

export default Main;
