const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const contact = require('./contact');

module.exports = router
  .get('/', home.get)
  .get('/game', game.get)
  .get('/contact', contact.get);
