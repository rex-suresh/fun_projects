const fs = require('fs');
const createStyleSheet = require('./createStyle.js').createStyleSheet;

const startSliding = function () {
  const slideLimit = 300;
  const frames = 20;
  const time = 2;
  let positions = JSON.parse(fs.readFileSync('./boxPosition.json', 'utf8'));
  while (positions.right < slideLimit) {
    createStyleSheet(slideLimit, frames, time);
    positions = JSON.parse(fs.readFileSync('./boxPosition.json', 'utf8'));
  }
};

startSliding();
