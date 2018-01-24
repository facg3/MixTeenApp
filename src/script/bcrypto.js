const bcrypt = require('bcryptjs');

const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) reject(err);
    else {
      bcrypt.hash(password, salt, (error, hashpass) => {
        if (error) reject(error);
        else resolve(hashpass);
      });
    }
  });
});
const compPassword = (password, hashedPassword) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, res) => {
      if (err)reject(err);
      else resolve(res);
    });
  });

module.exports = { hashPassword, compPassword };
