import React, { Component } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import More from './More';
import Rodape from './Rodape';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <AboutMe />
          <More />          
        </main>    
        <Rodape />
      </div>
    );
  }
}

export default App;
