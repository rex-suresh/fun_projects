const game = require('./flyMoves.json');

if (game.positions.flyPos === 100) {
  process.exit = 1;
}
