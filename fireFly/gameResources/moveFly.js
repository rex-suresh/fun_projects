const fs = require('fs');
const pageTemplate = fs.readFileSync(process.argv[3], 'utf8');
const createPageFn = require('./createPage.js').generatePage;
const createPage = createPageFn.bind(null, pageTemplate);
const move = process.argv[2];
const game = require('./flyMoves.json');

const nextMove = function (move, game) {
  const mappedMoves = {
    'w': 10,
    's': -10,
    'a': 1,
    'd': 1,
    'p': 0
  };

  const upcomingPos = game.positions.flyPos + mappedMoves[move];
  game.positions.flyPos = upcomingPos % game.tileCount || upcomingPos;
  return createPage(game);
};

nextMove(move, game);
