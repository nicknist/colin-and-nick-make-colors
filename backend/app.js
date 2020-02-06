const express = require('express');
const app = express()
const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json())
app.use(cors());
app.locals.title = 'colin-and-nick-make-colors'

app.get('/', (request, response) => {
  response.status(200).json();
})

app.get('/api/v1/projects', async (request, response) => {
  try {
    const projects = await database('projects').select();
    response.status(200).json(projects);
  } catch (error) {
    response.status(500).json({ error })
  }
});

app.get('/api/v1/projects/:id', async (request, response) => {
  const { id } = request.params

  try {
    const project = await database('projects').where('id', id)

    if (project.length) {
      response.status(200).json(project)
    } else {
      response.status(404).json({ error: 'Project not found' })
    }
  } catch (error) {
    response.status(500).json({ error })
  }
});

app.post('/api/v1/projects', async (request, response) => {
  const project = request.body;
  
  for (let requiredParameter of ['title', 'palette1_name', 'palette2_name', 'palette3_name']) {
    if (!project[requiredParameter]) {
      return response.status(422).send({
        error: `Expected POST format: { title: <string>, palette1_name: <string>, palette2_name: <string>, palette3_name: <string>}.  You're missing the ${requiredParameter} property.`
      })
    }
  }

  let palette1_id = await database('palettes').where({title: project.palette1_name}).select('id');
  let palette2_id = await database('palettes').where({ title: project.palette2_name }).select('id');
  let palette3_id = await database('palettes').where({ title: project.palette3_name }).select('id');

  const newProject = {
    title: project.title,
    palette1_id: palette1_id[0].id,
    palette2_id: palette2_id[0].id,
    palette3_id: palette3_id[0].id
  }

  try {
    const id = await database('projects').insert(newProject, 'id');
    
    response.status(201).json({ id: id[0] })
  } catch (error) {
    response.status(500).json({ error })
  }
})

module.exports = app;