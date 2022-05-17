const test = require('./test.js').test;
const assert = require('assert');
const scale = require('./scale.js').scale;

const testCases = [
  {
    description: 'test for same Range',
    testFn: function () {
      const actual = scale({min: 0, max: 100}, {min: 0, max: 100}, 20);
      assert.strict.deepEqual(actual, 20);
    },
  }, 
  {
    description: 'test for smaller Range',
    testFn: function () {
      const actual = scale({min: 0, max: 100}, {min: 0, max: 10}, 20);
      assert.strict.deepEqual(actual, 2);
    },
  },
  {
    description: 'test for larger Range',
    testFn: function () {
      const actual = scale({min: 0, max: 100}, {min: 0, max: 1000}, 20);
      assert.strict.deepEqual(actual, 200);
    },
  },
  {
    description: 'test for negative Range',
    testFn: function () {
      const actual = scale({min: -10, max: 90}, {min: 0, max: 100}, 20);
      assert.strict.deepEqual(actual, 30);
    },
  }
];

testCases.forEach(test);
