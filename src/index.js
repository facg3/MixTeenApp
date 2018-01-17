const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`the server work on port ${app.get('port')}`);
});
