const fs = require('fs');
const {tags} = require('./tagGenerators.js');
const {div, article, table, tbody, tr, td, th, header, h2, img, link} = tags;
const imgPath = './resources/images/';

const pictureBlockGen = function (path, { name }) {
  return div(div(img(
  [['src', path + name + '.png'], ['alt', name], ['title', name]]),
  [['class', 'picture-container']]),
  [['class', 'pokemon-picture']]);  
};
const pictureBlock = pictureBlockGen.bind(null, imgPath);
  
const headerBlock = function ({ name, types }) {
  const heading = h2(name, [['class', 'pokemon-name']]);
  const types = types.map(type => div(type, [['class', type]]));
  const typeBlock = div( types.join(''), [['class', 'pokemon-type']]);
  const headerContent = header(heading + typeBlock);
  
  return headerContent ;
};

const tableBlock = function (pokemon) {
  const { weight, base_xp, hp, attack, defense, speed } = pokemon;
  const pokemonStats = { weight, base_xp, hp, attack, defense, speed };
  
  const tableBody = Object.entries(pokemonStats).map(
    ([stat, value]) =>
      tr(th(stat) + td(value)));
  return table(tbody(tableBody.join('')), [['class', 'stats']]);
};

const createPokemonCard = function (pokemon) {
  const pokeImageBlock = pictureBlock(pokemon);
  const headerContent = headerBlock(pokemon);
  const tableContent = tableBlock(pokemon);
  
  const pokemonDetails = div(
    headerContent + tableContent, [['class', 'pokemon-details']] );

  return article(
    pokeImageBlock + pokemonDetails,
    [['id', pokemon.id], ['class', 'pokemon-card']] );
};


// const pokemons = JSON.parse(fs.readFileSync('./resources/pokemons.json', 'utf8'));

// const cardsContent = pokemons.map((pokemon) => createPokemonCard(pokemon));
// fs.writeFileSync('./test.html', cardsContent.join(''), 'utf8');
// pokemons.map((x) => fs.appendFileSync('./test.html', JSON.stringify(createPokemonCard(x)), 'utf8'));
