const fs = require('fs');
const playerStatFile = process.argv[2];

const players = JSON.parse(fs.readFileSync(playerStatFile, 'utf8'));
const gameOver = (player) => player.hp < 0;

// eslint-disable-next-line no-console
console.log(+ gameOver(players.player1) || + gameOver(players.player2));
