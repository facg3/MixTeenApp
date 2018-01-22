const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const tryAgain = require('./tryAgain');
const congrate = require('./congrate');

module.exports = router
  .get('/', home.get)
  .get('/game', game.get)
  .get('/tryAgain', tryAgain.get)
  .get('/congrate', congrate.get);
