const fs = require('fs');
const pageTemplate = fs.readFileSync(process.argv[3], 'utf8');

const createPageFn = require('./createGame.js').generatePage;
const createPage = createPageFn.bind(null, pageTemplate);

const move = process.argv[2];
const game = require('./flyMoves.json');

const nextMove = function (move, game) {
  const mappedMoves = {
    'w': -10,
    's': 10,
    'a': -1,
    'd': 1,
  };

  const upcomingPos = game.positions.flyPos + mappedMoves[move];
  game.positions.flyPos = upcomingPos;

  if (upcomingPos > game.tileCount || upcomingPos < 1) {
    game.positions.flyPos = Math.abs(game.tileCount - Math.abs(upcomingPos));
  }
  return createPage(game);
};

nextMove(move, game);
