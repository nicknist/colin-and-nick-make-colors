import React from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ColorContainer />
    </div>
  );
}

export default App;
