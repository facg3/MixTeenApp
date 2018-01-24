const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const signin = require('./signin');
const signup = require('./signup');
const logout = require('./logout');
const tryAgain = require('./tryAgain');
const levels = require('./levels');
const congrate = require('./congrate');
const contact = require('./contact');
const about = require('./about');
const error = require('./error');


module.exports=router
  .get('/', home.get)
  .post('/signup', signup.post)
  .get('/game', game.get)
  .get('/signin', signin.get)
  .post('/signin', signin.post)
  .get('/signup', signup.get)
  .get('/logout', logout.get)
  .get('/tryAgain', tryAgain.get)
  .get('/congrate', congrate.get)
  .get('/contact', contact.get)
  .get('/levels', levels.get)
  .get('/about', about.get)
  .get('/error', error.get);


