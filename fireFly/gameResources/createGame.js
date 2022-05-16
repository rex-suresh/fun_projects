const fs = require('fs');

const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';
const attributesOf = (attributes) => attributes.map(createAttr).join(' ');

const tag = (tag, contents, attValues = []) => {
  const startTag = ''.concat('<', tag, ' ', ...attributesOf(attValues), '>');
  const endTag = ''.concat('</', tag, '>');
  return startTag + contents + endTag;
};

const div = (contents, attValues) => tag('div', contents, attValues);

const divBlock = function (currentPos) {
  const { flyPos, foodPos } = this;
  const tiles = {
    fly: div(div('', [['class', 'fly']]), []),
    food: div(div('', [['class', 'food']]), []),
    tile: div('', []),
    nest: div(div('', [['class', 'food nest']]), [])
  };  
  
  let divLine = tiles.tile;
  if (currentPos === flyPos) {
    divLine = tiles.fly;
  }
  if (currentPos === foodPos) {
    divLine = tiles.food;
  }
  if (flyPos === foodPos && currentPos === flyPos) {
    divLine = tiles.nest;
  }

  return divLine;
};

const generateDivBlock = function (tileCount, positions) {
  const gameTiles = divBlock.bind(positions);

  return Array(tileCount).fill(1).map((one, index) =>
    gameTiles(one + index)).join('');
};

const generatePage = function (template, game) {
  const { tileCount, positions } = game;
  const page = template.replace(/__board__/,
    generateDivBlock(tileCount, positions));

  fs.writeFileSync('index.html', page, 'utf8');
  fs.writeFileSync('./gameResources/flyMoves.json',
    JSON.stringify(game, null, 2), 'utf8');

  return game;
};

exports.generatePage = generatePage;
