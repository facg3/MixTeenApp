const express = require('express');

const app = express();

const hbars = require('express-handlebars');

const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./controllers');
const bodyparser = require('body-parser');

module.exports = app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({
    extended: false,
  }))

  .use(express.static(path.join(__dirname, '..', 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')
  .engine('hbs', hbars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }))

  .set('port', process.env.PORT || 4000)
  .use(favicon(path.join(__dirname, '..', 'public', 'images/icon.ico')))
  .use(routes);
