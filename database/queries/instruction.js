const connect = require('../dbConnection');

const getInstruction = (req, res, cb) => {
  const sql = {
    text: 'delete from members where level_id=$1',
    values: [JSON.parse(req.body).level_id],
  };
  connect.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows);
    }
  });
};

module.exports = getInstruction;
