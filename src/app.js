const express = require('express');

const app = express();

const hbars = require('express-handlebars');

const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./controllers');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbars({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.set('port', process.env.PORT || 8000);
app.use(favicon(path.join(__dirname, '..', 'public', 'images/icon.ico')));
app.use(routes);


module.exports = app;
