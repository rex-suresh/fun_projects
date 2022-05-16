const fs = require('fs');

const changePos = function (template, nextPos, styleFile) {
  const newStyle = template.replace(/__LENGTH__/, nextPos);
  fs.writeFileSync(styleFile, newStyle, 'utf8');
};

const nextPosition = function (currentPos, limit, parts, time) {
  const displacement = limit / (parts * time);
  return currentPos + displacement;
};

const createStyleSheet = function (limit, parts, time) {
  const positions = JSON.parse(fs.readFileSync('./boxPosition.json', 'utf8'));
  const styles = fs.readFileSync('./style_template.css', 'utf8');
  const styleFile = 'style.css';

  const nextPos = nextPosition(positions.right, limit, parts, time);
  changePos(styles, nextPos, styleFile);
  
  positions.right = nextPos;
  fs.writeFileSync('./boxPosition.json', JSON.stringify(positions, null, 2),
    'utf-8');
};

const styleProperties = process.argv.slice(2).map(num => +num);
createStyleSheet(...styleProperties);
