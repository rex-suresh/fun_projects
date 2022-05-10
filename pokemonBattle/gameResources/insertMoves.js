const fs = require('fs');
const moves = process.argv.slice(2, 4);
const statsFile = process.argv[4];

const playerStats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));

playerStats.player1[moves[0]] = true;
playerStats.player2[moves[1]] = true;

fs.writeFileSync(statsFile, JSON.stringify(playerStats), 'utf8');
