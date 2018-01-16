const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');

router.get('/', home.get);
router.get('/game', game.get);
module.exports = router;
