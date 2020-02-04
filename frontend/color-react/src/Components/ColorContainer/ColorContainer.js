import React, { Component } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

const getFiveRandomColors = () => {
  const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
  return [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]
}

class ColorContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: getFiveRandomColors()
    }
  }

  handleClick = () => {
    this.setState({ colors: getFiveRandomColors() })
  }

  handleChange = (color, id) => {
    let newColors = [...this.state.colors];
    newColors.splice(id, 1, color);
    this.setState({ colors: newColors });
  }

  render() {
    const colors = this.state.colors;
    return (
      <>
      <section className='container'>
      <ColorPicker color={colors[0]} handleChange={this.handleChange} number={0}/>
      <ColorPicker color={colors[1]} handleChange={this.handleChange} number={1}/>
      <ColorPicker color={colors[2]} handleChange={this.handleChange} number={2}/>
      <ColorPicker color={colors[3]} handleChange={this.handleChange} number={3}/>
      <ColorPicker color={colors[4]} handleChange={this.handleChange} number={4}/>
      </section>
      <button className='randomizer' onClick={this.handleClick}>RANDOMIZE COLORS</button>
      </>
    )
  }
}

export default ColorContainer;
