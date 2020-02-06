import React, { Component } from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ColorContainer />
      </div>
    );
  }
}

export default App;
