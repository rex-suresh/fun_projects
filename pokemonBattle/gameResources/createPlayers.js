const fs = require('fs');
const allPokemons = JSON.parse(fs.readFileSync('resources/pokemons.json',
  'utf8'));

const createPokemon = function ( battlePokemons, pokemonName, index) {
  const { attack, defense, hp } = allPokemons[pokemonName];
  
  const playerDetails = {
    pokemonName, attack, hp,
    def: defense,
    shields: 3,
    shieldStatus: false,
    hitStatus: false,
  };

  const player = 'player' + (index + 1);
  battlePokemons[player] = playerDetails;
  return battlePokemons;
};

const createPokemonBattleStats = function (pokemonNames, file) {
  const battlePokemons = JSON.stringify(
    pokemonNames.reduce(createPokemon, {}), null, 2);
  
  fs.writeFileSync(file, battlePokemons, 'utf8');
};

const pokemonNames = process.argv.slice(2, 4);
const playerStatsFile = process.argv[4];

createPokemonBattleStats(pokemonNames, playerStatsFile);
// exports.createPokemonBattleStats = createPokemonBattleStats;
