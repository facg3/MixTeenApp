const db = require('../dbconnection');

const addUser = user => new Promise((resolve, reject) => {
  console.log('sdsds');
  const sql = {
    text: 'INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id,username',
    values: [user.username, user.email, user.password],
  };
  db.query(sql, (err, res) => {
    if (err)reject(err);
    else resolve(res);
  });
});
const checkUser = username => new Promise((resolve, reject) => {
  const sql = {
    text: 'SELECT username,password FROM users WHERE username = $1 ',
    values: [username],
  };
  db.query(sql, (err, res) => {
    if (err)reject(err);
    else resolve(res);
  });
});
module.exports = { addUser, checkUser };
