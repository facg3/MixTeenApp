const express = require('express');

const router = express.Router();
const home = require('./home');
// const about = require('about');
// const contact = require('contact');
// const levels = require('levels');
// const game = require('game');

router.get('/', home.get);
module.exports = router;
