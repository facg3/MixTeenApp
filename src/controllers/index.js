const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');

const levels = require('./levels');

const contact = require('./contact');
const about = require('./about');


module.exports = router
  .get('/', home.get)
  .get('/game', game.get)

  .get('/contact', contact.get)
  .get('/levels', levels.get)
  .get('/about', about.get);
