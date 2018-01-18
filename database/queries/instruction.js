const connect = require('../dbConnection');
/* i use module body parser but after make request and make midleware */
const getInstruction = (cb) => {
  const sql = {
    text: 'select instruction from levels where level_id=1',
    // values: [JSON.parse(req.body).user_id],
  };
  connect.query(sql, (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows);
  });
};

module.exports = getInstruction;
