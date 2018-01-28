
const hbars = require('express-handlebars');

const path = require('path');

const routes = require('./controllers/index');

const bodyparser = require('body-parser');

const favicon = require('serve-favicon');

const cookieParser = require('cookie-parser');

const express = require('express');
const error = require('./controllers/error');
const { isCelebrate } = require('celebrate');

const app = express();
module.exports = app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: false }))

  .use(express.static(path.join(__dirname, '..', 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')
  .engine('hbs', hbars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }))
  .use(favicon(path.join(__dirname, '..', 'public', 'images/icon.ico')))
  .use(cookieParser())
  .set('port', process.env.PORT || 4000)
  .use(routes)
  .use((err, req, res, next) => {
    if (!isCelebrate(err)) return next(err);
    res.status(200).json(err);
  })
  .use(error.server)
  .use(error.client);
