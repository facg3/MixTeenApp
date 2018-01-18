const interactjs = require('interactjs');

console.log(interactjs);
exports.get = (req, res) => {
  res.render('game', { interact: interactjs });
};
