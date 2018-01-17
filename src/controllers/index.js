const express = require('express');

const router = express.Router();
const home = require('./home');
const contact = require('./contact');
const about = require('./about');
const error = require('./error');

module.exports = router.get('/', home.get)
  .get('/contact', contact.get)
  .get('/about', about.get)
  .get('error404', error.get);
