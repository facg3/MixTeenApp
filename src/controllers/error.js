exports.client = (req, res) => {
  res.render('404', {
    activePage: {
      login: true,
    },
  });
};
exports.server = (err, req, res) => {
  res.render('500', {
    activePage: {
      login: true,
    },
  });
};
