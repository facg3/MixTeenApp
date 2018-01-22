const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const about = require('./about');

module.exports = router
 .get('/', home.get)
 .get('/game', game.get)
 .get('/about', about.get);
