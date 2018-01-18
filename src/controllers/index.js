const express = require('express');

const router = express.Router();
const home = require('./home');
const levels = require('./levels');
const game = require('./game');

router.get('/', home.get);
router.get('/levels', levels.get);
router.get('/game', game.get);
module.exports = router;
