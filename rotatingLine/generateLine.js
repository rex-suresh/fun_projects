const generatePattern = function (lineWidth, lineType) {
  const pattern = [];
  for (let currentLine = 1; currentLine <= lineWidth; currentLine++) {
    pattern.push(lineType(currentLine, lineWidth));
  }
  return pattern.join('\n');
};

const horizontalLine = function (currentLine, lineWidth) {
  const center = Math.ceil(lineWidth / 2);
  const symbol = currentLine === center ? '* ' : ' ';
  return symbol.repeat(lineWidth);
};

const verticalLine = function (currentLine, lineWidth) {
  const center = Math.floor(lineWidth / 2);
  const line = ' '.repeat(center) + '*';
  return ' '.repeat(Math.floor(lineWidth / 2)) + line;
}

const crossLineLeft = function (currentLine, lineWidth) {
  const line = ' '.repeat(currentLine - 1) + '*';
  return ' '.repeat(Math.floor(lineWidth / 2)) + line;
};

const crossLineRight = function (currentLine, lineWidth) {
  const line = ' '.repeat(lineWidth - currentLine) + '*';
  return ' '.repeat(Math.floor(lineWidth / 2)) + line;
};

exports.generatePattern = generatePattern;
exports.horizontalLine = horizontalLine;
exports.verticalLine = verticalLine;
exports.crossLineLeft = crossLineLeft;
exports.crossLineRight = crossLineRight;