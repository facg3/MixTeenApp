exports.get = (req, res) => {
  res.render('adminpanel', { adminpanel: true });
};
