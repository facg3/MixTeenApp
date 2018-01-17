const dbDo = require('../queries/instruction');
const test = require('tape');

test('Test-1: get Instructon Function Test:', (t) => {
  dbDo((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res[0].instruction, 'Instruction Level One', 'First Row ');
      t.end();
    }
  });
});
