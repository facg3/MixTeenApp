const interact = require('interactjs');

exports.get = (req, res) => {
  res.render('game', {
    interact,
    game: true,
  });
};
