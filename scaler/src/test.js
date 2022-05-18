const test = function (testCase) {
  const { testFn, description } = testCase;
  const testResults = { description };
  testResults.fail = false;
  
  try {
    testFn();
  } catch (error) {
    testResults.error = error;
    testResults.fail = true;
  }

  printResults(testResults);
};

const printResults = function (testResults) {
  const symbol = testResults.fail ? '❌' : '✅';
  console.log(symbol, '-', testResults.description);
  if (testResults.fail) {
    console.log(testResults.error);
  }
  return testResults;
};

/*
//  (test case format)//////////////////////////////////////////

// const addTwoSameNum = function () {
//   const actual = add(2, 3);
//   assert.strict.deepEqual(actual, 5);
// };

/// (testCases format)///////////////////////////////////////////

// const testCases = [
//   {
//     testFn: addTwoSameNum,
//     description: 'test for adding Two numbers',
//   },
//   {
//     testFn: addTwoNegNum,
//     description: 'test for adding Two negative numbers',
//   },
//   {
//     testFn: addOneNum,
//     description: 'test for adding one Number',
//   },
// ];

/// (invoking)///////////////////////////////////////////////
// testCases.forEach(test);
*/

exports.test = test;
