const fs = require('fs');
const assert = require('assert');

const tests = function () {
  const file = './test/flyMoves.json';
  const testFile = './gameResources/isGameOver.js';
  
  describe('isGameOver', () => {
    it('test for exit code 1', () => {
      fs.writeFileSync(file, JSON.stringify(
        { 'positions': { 'flypos': 10, 'foodpos': 10 } }), 'utf8');
      
      eval(fs.readFileSync(testFile, 'utf8'));
      const actual = process.exitCode;
      
      fs.rmSync(file);
      assert.strict.equal(actual, 1);
    });
    
    it('test for exit code 0', () => {
      fs.writeFileSync(file, JSON.stringify(
        { 'positions': { 'flypos': 2, 'foodpos': 10 } }), 'utf8');
        
      eval(fs.readFileSync(testFile, 'utf8'));
      const actual = process.exitCode;
      
      fs.rmSync(file);
      assert.strict.equal(actual, 1);
    });
    
    it('test for exit code 0 - flypos over foodPos', () => {
      fs.writeFileSync(file, JSON.stringify(
        { 'positions': { 'flypos': 11, 'foodpos': 10 } }), 'utf8');
        
      eval(fs.readFileSync(testFile, 'utf8'));
      const actual = process.exitCode;
      
      fs.rmSync(file);
      assert.strict.equal(actual, 1);
    });
  });  
};

tests();
