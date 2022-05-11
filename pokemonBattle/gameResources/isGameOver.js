// const fs = require('fs');
// const playerStatFile = process.argv[2];
// const players = JSON.parse(fs.readFileSync(playerStatFile, 'utf8'));
const gameOver = (player) => player.hp < 0;

const isGameOver = function (players) {
  if (gameOver(players.player1) || gameOver(players.player2)) {
    process.exitCode = 1;
    const winner = players.player1.hp > 0 ? players.player1.pokemonName :
      players.player2.pokemonName;
    console.log(winner, 'won the battle !!!', '\n');
  }
};

exports.isGameOver = isGameOver;
