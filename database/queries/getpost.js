
const dbConnection = require('../dbConnection.js');

const sql = 'select * from posts';
const getPost = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

module.exports = {
  getPost,
};
