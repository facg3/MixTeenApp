const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const signin = require('./signin');
const signup = require('./signup');
const logout = require('./logout');


router
  .post('/signup', signup.post)
  .get('/', home.get)
  .get('/game', game.get)
  .get('/signin', signin.get)
  .post('/signin', signin.post)
  .get('/signup', signup.get)
  .get('/logout', logout.get);
module.exports = router;
