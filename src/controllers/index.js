const express = require('express');

const router = express.Router();
const home = require('./home');
const levels = require('./levels');
const game = require('./game');

router.get('/', home.get)
  .get('/levels', levels.get)
  .get('/game', game.get);
module.exports = router;
