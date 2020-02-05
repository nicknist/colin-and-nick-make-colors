const express = require('express');
const app = express()
const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json())
app.use(cors());

app.get('/', (request, response) => {
  response.send('Welcome to Colin and Nicks color picker')
})

module.exports = app;