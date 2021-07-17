import React from 'react';

const Palette = ({ name, colors, deletePalette }) => {
  const colorDivs = colors.map(color => {
    const background = {
      margin: '10px',
      padding: '5px',
      width: '10px',
      height: '20px',
      background: `${color}`,
      borderRadius: '1px'
    }
    return (
      <div style={ background }>
      </div>
    )
  })

  return (
    <>
      <h1 className='white'>{name}</h1>
      <button id={name} onClick={() => deletePalette(name)} className='randomizer'>Delete This Palette</button>
      <article className='palette-div'>
        {colorDivs}
      </article>
    </>
  )
}

export default Palette;
