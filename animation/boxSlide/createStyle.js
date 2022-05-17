const fs = require('fs');

const nextPosition = function (currentPos, limit, frames, time) {
  const displacement = limit / (frames * time);
  return currentPos + displacement;
};

const readSlideDetails = function () {
  let template;
  let positions;

  try {
    template = fs.readFileSync('./style_template.css', 'utf8');
    positions = JSON.parse(fs.readFileSync('./boxPosition.json', 'utf8'));
  } catch (error) {
    throw {
      name: error.name,
      message: 'unable to read data and template files'
    };
  }

  return { template, positions };
};

const writeSlideDetails = function ({ newStyle, positions }) {
  try {
    fs.writeFileSync('style.css', newStyle, 'utf8');
    fs.writeFileSync('./boxPosition.json', JSON.stringify(positions, null, 2),
      'utf-8');  
  } catch (error) {
    throw {
      name: error.name,
      message: 'unable to write data to style and position files'
    };
  }  
};

const createStyleSheet = function (limit, frames, time) {
  const { template, positions } = readSlideDetails();
  
  const newStyle = template.replace(/__LENGTH__/,
    nextPosition(positions.right, limit, frames, time));
  
  positions.right = nextPosition(positions.right, limit, frames, time);
  writeSlideDetails({newStyle, positions});
};

// const styleProperties = process.argv.slice(2).map(num => +num);
// createStyleSheet(...styleProperties);
exports.createStyleSheet = createStyleSheet;
