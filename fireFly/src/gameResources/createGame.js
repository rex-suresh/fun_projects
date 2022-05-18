const fs = require('fs');

const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';

const attributesOf = (attributes) => {
  const createdAtt = [];
  for (const att in attributes) {
    createdAtt.push(createAttr([att, attributes[att]]));
  }
  return ' ' + createdAtt.join(' ');
};

const tagOf = function (tag, attributes, ...content) {
  const newContent = content.map(
    subTag => Array.isArray(subTag) ? tagOf(...subTag) : subTag).join('');
  if ('img,link'.includes(tag)) {
    return '<' + tag + attributesOf(attributes) + '/>';
  }
  return '<' + tag + attributesOf(attributes) + '>' + newContent +
    '</' + tag + '>';
};

const divOf = function (pos) {
  const attributes = {};
  const { flyPos, foodPos } = this;

  if (flyPos === pos ) {
    attributes.class = 'fly';
  } else if (foodPos === pos) {
    attributes.class = 'food';
  }
  if (flyPos === pos && flyPos === foodPos) {
    attributes.class = 'food nest';
  }
  
  return ['div', {}, ['div', attributes, '']];
};

const generateBoard = function ({tileCount, positions}) {
  const gameTiles = divOf.bind(positions);
  const dom = Array(tileCount).fill(1).map((num, index) =>
    gameTiles(num + index));
  return dom.map(tag => tagOf(...tag)).join('');
};

const writeToFiles = function (page, game) {
  try {
    fs.writeFileSync('index.html', page, 'utf8');
    fs.writeFileSync('./gameResources/flyMoves.json',
      JSON.stringify(game, null, 2), 'utf8'); 
  } catch (error) {
    throw { name: error.name, message: 'unable to create page'};
  }
};

const generatePage = function (template, game) {
  const page = template.replace(/__board__/, generateBoard(game));
  writeToFiles(page, game);
};

exports.generatePage = generatePage;
