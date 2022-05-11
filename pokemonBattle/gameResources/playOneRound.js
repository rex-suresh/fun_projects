const insertMoves = require('./insertMoves.js').changeMove; // statFile , moves
const battle = require('./pokemonBattle.js').playGame; // takes statF
const isGameOver = require('./isGameOver.js').isGameOver; // statFile

const statsFile = process.argv[2];
const moves = process.argv.slice(3, 5);

const showResults = function (players) {
  for (const player in players) {
    const { pokemonName, hp, def, shields, attack } = players[player];
    console.table({pokemonName, attack, hp, def, shields});
  }
};

const players = insertMoves(statsFile, moves);
showResults(battle(statsFile, players));
isGameOver(players);
