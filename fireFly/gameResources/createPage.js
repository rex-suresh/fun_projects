const fs = require('fs');
const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';
const attributesOf = (attributes) => attributes.map(createAttr).join(' ');

const tag = (tag, contents, attValues = []) => {
  const startTag = ''.concat('<', tag, ' ', ...attributesOf(attValues), '>');
  const endTag = ''.concat('</', tag, '>');
  return startTag + contents + endTag;
};

const div = (contents, attValues) => tag('div', contents, attValues);

const blockOf = function (currentPos) {
  const { flyPos, foodPos } = this;
  
  let content = '';
  if (currentPos === flyPos) {
    content = div('', [['class', 'fly']]);
  } else if (currentPos === foodPos) {
    content = div('', [['class', 'food']]);
  }
  if (flyPos === foodPos) {
    content = div('', [['class', 'food nest']]);
  }

  return div(content, []);
};

const generateDivs = function (tileCount, positions) {
  const divBlock = blockOf.bind(positions);
  return Array(tileCount).fill(1).map((one, index) =>
    divBlock(one + index)).join('');
};

const generatePage = function (template, game) {
  const { tileCount, positions } = game;
  const page = template.replace(/__board__/,
    generateDivs(tileCount, positions));
  fs.writeFileSync('index.html', page, 'utf8');
  fs.writeFileSync('./gameResources/flyMoves.json',
    JSON.stringify(game), 'utf8');
  return game;
};

exports.generatePage = generatePage;
