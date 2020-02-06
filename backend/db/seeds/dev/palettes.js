const samplePalettes = require('../../../sampleData')

const createPalette = async (knex, palette) => {
  let paletteId = await knex('palettes').insert({
    title: palette.title,
    color1: palette.color1,
    color2: palette.color2,
    color3: palette.color3,
    color4: palette.color4,
    color5: palette.color5
  }, 'id')
  return paletteId;

}

exports.seed = async (knex) => {
  try {
    await knex('palettes').del()
    // await knex('projects').del()

    let palettePromises = samplePalettes.map(palette => createPalette(knex, palette))

    return Promise.all(palettePromises);
  } catch (error) {
    console.log(`Error has occured with palettes data: ${error}`)
  }

  
};
