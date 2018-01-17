const express = require('express');

const router = express.Router();
const home = require('./home');

router.get('/', home.get);
const contact = require('./contact');

router.get('/contact', contact.get);
module.exports = router;
