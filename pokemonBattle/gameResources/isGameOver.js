const fs = require('fs');
const playerStatFile = process.argv[2];

const players = JSON.parse(fs.readFileSync(playerStatFile, 'utf8'));
const gameOver = (player) => player.hp < 0;

for (const player in players) {
  if (gameOver(players[player])) {
    console.log(players[player].name, 'is Winner !!');
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
}

// console.log(+ gameOver(players.player1) || + gameOver(players.player2));
