const { addPost } = require('../queries/addpost');
const { getPost } = require('../queries/getpost');
const test = require('tape');

test('Test-1: getPost Function Test:', (t) => {
  getPost((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.equal(res.length, 3, 'Number of rows should be incremented by one.');
      t.deepEqual(res[0], {
        id: 1,
        name: 'Ismail',
        post: 'Test Post One',
      }, 'First Row Test Should Pass Correctly.');
      t.deepEqual(res[1], {
        id: 2,
        name: 'Walaa',
        post: 'Test Post Two',
      }, 'Second Row Test Should Pass Correctly.');
      t.deepEqual(res[2], {
        id: 3,
        name: 'Marwa',
        post: 'Test Post Three',
      }, 'Third Row Test Should Pass Correctly.');
      t.end();
    }
  });
});

test('Test-2: addPost Function Test:', (t) => {
  addPost('Nadia', 'Test Post six', (err, newData) => {
    if (err) {
      t.notOk(err);
    } else {
      getPost((err2, newData1) => {
        if (err) {
          t.notOk(err);
        } else {
          t.equal(newData1.length, 4, 'Number of Rows Should Equal (4).');
          t.deepEqual(newData[newData1.length - 1], {
            id: 4,
            name: 'Nadia',
            post: 'Test Post Four',
          }, 'Last Row Should Equal Test Value.');
          t.end();
        }
      });
    }
  });
});
