const user = require('../../database/queries/user');
const bcrypto = require('../script/bcrypto');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.get = (req, res) => {
  res.render('signin', {
    loginstyle: true,
    login: false,
    activePage: {
      game: true,
    },
  });
};
exports.post = (req, res) => {
  const { username, password } = req.body;
  user.checkUser(username).then((data) => {
    if (data.rowCount !== 0) {
      bcrypto.compPassword(password, data.rows[0].password)
        .then((result) => {
          if (result) {
            const userData = { id: data.rows[0].id, username: data.rows[0].username };
            const token = jwt.sign(userData, process.env.TOKEN_SECRET);
            res.cookie('token', token);
            res.json({ success: true, username: userData.username, login: true });
          } else res.json({ massege: 'password is wrong' });
        })
        .catch((error) => { if (error)res.render('signin'); });
    } else {
      res.json({ message: 'user is not found' });
    }
  }).catch((err) => { if (err) res.json({ message: 'username is not valid' }); });
};
