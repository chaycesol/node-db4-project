const express = require('express');

const helmet = require('helmet');

// const db = require('whatever/db-config.js');

// const recipeRouter = require('./routers/recipe-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
// server.use('/api/recipes', recipesRouter);
server.use(logger());


server.get('/', (req, res) =>{
    res.status(200).json({ message: "up and running"})
})


function logger(req, res, next) {
    return function (req, res, next) {
      console.log(`a ${req.method} request was made to ${req.url} at ${new Date()}`);
      next();
    }
  }

  module.exports = server;