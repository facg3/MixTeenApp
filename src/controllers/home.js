const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.get = (req, res) => {
  const cookie = req.cookies.token || '';
  if (cookie) {
    jwt.verify(cookie, process.env.TOKEN_SECRET, (error, d) => {
      if (error) {
        res.status(200).render('home', { home: true });
      } else {
        res.status(200).render('home', { home: true, login: true, username: d.username });
      }
    });
  } else res.status(200).render('home', { home: true });
};
