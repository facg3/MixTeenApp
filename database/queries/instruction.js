const connect = require('../dbConnection');
const getInstruction = (req, res, cb) => {
const sql = {
   text: 'delete from members where level_id=$1',
   values: [JSON.parse(req.body).level_id],
};
const getInstruction = (cb) => {
  connect.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getInstruction;
