
const connect = require('./dbConnection');
const fs = require('fs');
const path = require('path');

fs.readFileSync(path.join(__dirname, '/build.sql'), (error, sql) => {
  connect.query(sql, (err, res) => {
    if (err) {
      throw new Error('There is an Error in SQL statment $ {err}');
    } else {
      console.log(res);// eslint-disable-line
    }
  });
});
