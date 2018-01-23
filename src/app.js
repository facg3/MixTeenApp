
const hbars = require('express-handlebars');

const path = require('path');

const routes = require('./controllers/index');

const bodyparser = require('body-parser');

const cookieParser = require('cookie-parser');

const express = require('express');

const app = express();

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
app.use(cookieParser());
app.set('port', process.env.PORT || 4000);

app.use(routes);


module.exports = app;
