const test = require('tape');
const supertest = require('supertest');
const app = require('../app.js');

// experimental Test
test('Initialize', (t) => {
  const name = 'MixTeen';
  t.equal(name, 'MixTeen', 'Should return MixTeen');
  t.end();
});

// Route  statusCode Test
test('home test route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});

test('level test route', (t) => {
  supertest(app)
    .get('/level')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});

test('game test route', (t) => {
  supertest(app)
    .get('/game')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});


test('about test route', (t) => {
  supertest(app)
    .get('/contact')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});


test('contact test route', (t) => {
  supertest(app)
    .get('/contact')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});
test('error test route', (t) => {
  supertest(app)
    .get('/error')
    .expect(200)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'should equal 200');
      t.error(err, 'No error');
      t.end();
    });
});
