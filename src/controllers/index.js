const express = require('express');

const router = express.Router();
const home = require('./home');
const game = require('./game');
const signin = require('./signin');
const signup = require('./signup');
const logout = require('./logout');

const levels = require('./levels');

const contact = require('./contact');
const about = require('./about');

const schem = require('./schem');
const { celebrate } = require('celebrate');


module.exports = router
  .get('/', home.get)
  .post('/signup', celebrate(schem.usersignup), signup.post)
  .get('/game', game.get)
  .get('/signin', signin.get)
  .post('/signin', celebrate(schem.usersignin), signin.post)
  .get('/signup', signup.get)
  .get('/logout', logout.get)
  .get('/contact', contact.get)
  .get('/levels', levels.get)
  .get('/about', about.get);
