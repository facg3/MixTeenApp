const express = require('express');

const router = express.Router();
const home = require('./home');
const levels = require('./levels');

router.get('/', home.get);
router.get('/levels', levels.get);
module.exports = router;
