const sampleProjects = [
  {
    title: 'Hot pants',
    project1_name: 'Colins house',
    project2_name: 'Nicks house',
    project3_name: 'Colin and Nicks Crayons'
  }
];

const findPaletteId = async (knex, paletteTitle) => {
  let id = await knex('palettes').where({
    title: paletteTitle
  }).select('id')
  
  return id[0].id;
}

const createProjects = async (knex, project) => {
  let palette1_id = await findPaletteId(knex, project.project1_name);
  let palette2_id = await findPaletteId(knex, project.project2_name);
  let palette3_id = await findPaletteId(knex, project.project3_name);
  
  let projectId = await knex('projects').insert({
    title: project.title,
    palette1_id: palette1_id,
    palette2_id: palette2_id,
    palette3_id: palette3_id,
  }, 'id')
  return projectId
};

exports.seed = async (knex) => {
  try {
    await knex('projects').del()

    let projectPromises = sampleProjects.map(project => createProjects(knex, project))

    return Promise.all(projectPromises)
  } catch (error) {
    console.log(`Error has occured with projects data: ${error}`)
  }
};
