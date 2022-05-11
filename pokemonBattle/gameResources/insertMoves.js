const fs = require('fs');
// const moves = process.argv.slice(2, 4);
// const statsFile = process.argv[4];

const movesSwitch = {
  attack: 'hitStatus',
  shield: 'hitStatus',
  defend: 'defend',
};

const changeMove = function (statsFile, moves) {
  const playerStats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));

  playerStats.player1[movesSwitch[moves[0]]] = true;
  playerStats.player2[movesSwitch[moves[1]]] = true;

  fs.writeFileSync(statsFile, JSON.stringify(playerStats), 'utf8');
  return playerStats;
};

exports.changeMove = changeMove;
