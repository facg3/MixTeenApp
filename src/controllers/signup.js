const bcrypto = require('../script/bcrypto.js');
const user = require('../../database/queries/user.js');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  res.render('signup', {
    login: false,
  });
};

exports.post = (req, res) => {
  const { username, email, password } = req.body;
  bcrypto.hashPassword(password).then((hashedPassword) => {
    user.addUser({ username, email, password: hashedPassword })
      .then((data) => {
        const userData = {
          id: data.rows[0].id,
          username: data.rows[0].username,
        };
        const token = jwt.sign(userData, process.env.TOKEN_SECRET);
        res.cookie('token', token);
        res.json({ success: true, username: userData.username });
      })
      .catch(err => console.log(err));
  }).catch((err) => { console.log(err); });
};
