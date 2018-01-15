
const connect = require('./dbConnection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, '/build.sql'));
connect.query(sql, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
