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
  // response.send('Welcome to Colin and Nicks color picker')
  response.status(200).json();
})

module.exports = app;