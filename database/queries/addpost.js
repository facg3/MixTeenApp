
const dbConnection = require('../dbConnection.js');

const addPost = (name, post, cb) => {
  dbConnection.query(
    'INSERT INTO posts (name, post)VALUES ($1, $2)', [name, post],
    (err, res) => {
      if (err) cb(err);
      cb(null, res);
    },
  );
};
module.exports = {
  addPost,
};
