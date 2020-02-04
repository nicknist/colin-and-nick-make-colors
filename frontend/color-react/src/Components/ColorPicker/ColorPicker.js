import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = (color) => {
    console.log(color);
    this.props.handleChange(color.hex, this.props.number)
  }

  render() {
    const popOver = {
      position: 'absolute',
      zIndex: '2'
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    };
    const background = {
      margin: '10px',
      padding: '5px',
      width: '100px',
      height: '200px',
      background: `${this.props.color}`,
      borderRadius: '1px'
    }
    return (
      <article>
        <div className="color-rectangle" style={ background } onClick={ this.handleClick }></div>
        <p>{this.props.color}</p>
        <p>Hex Code</p>
        { this.state.displayColorPicker ?
          <div className="color-rectangle" style={ popOver }>
          <div className="no-hover" id={`square${this.props.number}`} style={ cover } onClick={ this.handleClose }/>
          <ChromePicker disableAlpha={true} color={this.props.color} onChangeComplete={this.handleChange}/>
          </div> : null }
      </article>
    )
  }
}

//these will all show up at the same place. need to find a way to make it more dynamic for the pop-up - this is the popOver and cover variables
export default ColorPicker;
