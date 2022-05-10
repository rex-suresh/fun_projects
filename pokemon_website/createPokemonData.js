const fs = require('fs');

const splitData = (stringData) => stringData.split('|');

const parseObject = function (headerNames, values) {
  const headers = splitData(headerNames);
  const details = splitData(values);
  const parsedObject = {};
  
  for (let index = 0; index < headers.length; index++) {
    parsedObject[headers[index]] = details[index];
  }

  return parsedObject;
};

const formatDataType = (object, toNumeric, toArray) => {
  const separator = ',';
  const toNum = (number) => +number;
  
  for (const key of toNumeric) {
    object[key] = toNum(object[key]);
  }

  for (const key of toArray) {
    object[key] = object[key].split(separator);
  }
  return object;
};

const createObjects = function (stringData) {
  const header = stringData[0];
  const entries = stringData.slice(1);
  const parseOneObject = parseObject.bind(null, header);

  return entries.map(parseOneObject);
};

const parseData = function () {
  const fileData = fs.readFileSync('./resources/data/pokemon.csv', 'utf8');
  
  const allObjects = createObjects(fileData.split('\n'));
  return allObjects.map((object) => formatDataType(object,
    ['id', 'speed', 'hp', 'base_xp', 'attack', 'defense', 'weight'],
    ['Types']));
};

parseData();
// const parsePokemon = function (pokeDetail) {
//   const [
//     id,
//     name,
//     types,
//     speed,
//     hp,
//     base_xp,
//     attack,
//     defense,
//     weight
//   ] = pokeDetail.split('|');

//   return {
//     id : +id,
//     name,
//     types: types.split(','),
//     speed : +speed,
//     hp: +hp,
//     base_xp: +base_xp,
//     attack: +attack,
//     defense: +defense,
//     weight: +weight
//   };
// };

// const createPokemons = function () {
//   const pokemonData = fs.readFileSync('./resources/data/pokemon.csv'
// , 'utf8').split('\n').slice(1);
//   return pokemonData.map(parsePokemon);
// };

// fs.writeFileSync('./resources/pokemons.json', 
// JSON.stringify(createPokemons()), 'utf8');
// // console.log(createPokemons());
// console.log("done");
// // exports.createPokemonData = createPokemons;
