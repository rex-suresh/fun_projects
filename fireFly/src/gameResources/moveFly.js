const fs = require('fs');
const createPageFn = require('./createGame.js').generatePage;

const pageTemplate = fs.readFileSync(process.argv[3], 'utf8');
const createPage = createPageFn.bind(null, pageTemplate);

const move = process.argv[2];
const game = require('./flyMoves.json');

const nextMove = function (move, game) {
  const mappedMoves = { 'up': -10, 'down': 10, 'left': -1, 'right': 1 };
  const upcomingPos = game.positions.flyPos + mappedMoves[move];
  game.positions.flyPos = upcomingPos;
  
  if (upcomingPos > game.tileCount || upcomingPos < 1) {
    game.positions.flyPos = Math.abs(game.tileCount - Math.abs(upcomingPos));
  }
  return game;
  // return createPage(game);
};

const main = function (move, game) {
  const newGamePos = nextMove(move, game);
  createPage(newGamePos);
};

main(move, game);
