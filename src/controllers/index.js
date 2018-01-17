const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');

module.exports = router.get('/', home.get)
  .get('/game', game.get);
