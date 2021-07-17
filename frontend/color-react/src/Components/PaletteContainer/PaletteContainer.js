import React from 'react';
import Palette from '../Palette/Palette';

const PaletteContainer = ({ palettes, deletePalette }) => {
  return (
    <>
      {palettes.map(palette => <Palette name={palette.name} colors={palette.colors} deletePalette={deletePalette}/>)}
    </>
  )
}

export default PaletteContainer;
