const fs = require('fs');

const splitData = (stringData) => stringData.split('|');

const parseObject = function (headerNames, values) {
  const headers = splitData(headerNames);
  const details = splitData(values);
  const parsedObject = {};
  
  for (let index = 0; index < headers.length; index++) {
    parsedObject[headers[index]] = +details[index] || details[index];
  }

  return parsedObject;
};

const createObjects = function (stringData) {
  const [header, ...entries] = stringData;
  const parseOneObject = parseObject.bind(null, header);
  const pokemonObjects = {};

  entries.forEach(
    (line) => {
      const name = line.split('|')[1];
      pokemonObjects[name] = parseOneObject(line);
    }
  );
  return pokemonObjects;
};

const parseData = function () {
  const fileData = fs.readFileSync('./pokemon.csv', 'utf8');
  return createObjects(fileData.split('\n'));
};

fs.writeFileSync('pokemons.json', JSON.stringify(parseData(), null, 2), 'utf8');
