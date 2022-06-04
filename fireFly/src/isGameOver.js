const game = require('./flyMoves.json');

process.exitCode = 0;
if (game.positions.flyPos === game.positions.foodPos) {
  process.exitCode = 1;
}
