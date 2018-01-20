const express = require('express');

const router = express.Router();
const home = require('./home');
const levels = require('./levels');
const congrate = require('./congrate');
const again = require('./again');

module.exports = router
  .get('/', home.get)
  .get('/levels', levels.get)
  .get('/congrate', congrate.get)
  .get('/again', again.get);
