import React, { Component } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import PaletteContainer from '../PaletteContainer/PaletteContainer';

const getFiveRandomColors = () => {
  const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
  return [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()]
}

class ColorContainer extends Component {
  constructor() {
    super();
    this.state = {
      colors: getFiveRandomColors(),
      palettes: [],
      paletteName: ''
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

  handleUpdate = (value) => {
    this.setState({ paletteName: value })
  }

  addPalette = () => {
    this.setState({ palettes: [...this.state.palettes, { colors: this.state.colors, name: this.state.paletteName }] })
  }

  deletePalette = async (name) => {
    let palette = this.state.palettes.findIndex(palette => name === palette.name)
    console.log(palette);
    let array = [...this.state.palettes];
    console.log(array);
    array.splice(1, palette);
    await this.setState({ palettes: array })
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
        <input type='text' className='palette-name' onChange={(e) => this.handleUpdate(e.target.value)}/>
        <button className='add-palette randomizer' onClick={this.addPalette}>Add These To a Palette</button>
        { this.state.palettes.length === 0 ? "Please add a Palette" : <PaletteContainer palettes={this.state.palettes} deletePalette={this.deletePalette}/>}
      </>
    )
  }
}

export default ColorContainer;
