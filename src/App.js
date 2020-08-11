import React from 'react';
import logo from './logo.svg';
import './App.css';

import bg_image from './background.jpg';
import Button from './components/Button';

function App() {
  return (
    <div className="App" styles={{ backgroundImage:`url(${bg_image}`}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dick hard win hard.
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
