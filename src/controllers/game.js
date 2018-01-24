const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.get = (req, res) => {
  const cookie = req.cookies.token || '';
  if (cookie) {
    jwt.verify(cookie, process.env.TOKEN_SECRET, (error, decode) => {
      if (error) {
        res.redirect('/');
      } else {
        res.status(200).render('game', { game: true, login: true, username: decode.username });
      }
    });
  } else res.redirect('/');
};
