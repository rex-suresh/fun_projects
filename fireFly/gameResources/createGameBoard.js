const fs = require('fs');
const createGame = require('./createGame.js').generatePage;

const game = {
  'tileCount': 100,
  'positions': {
    'flyPos': 1,
    'foodPos': Math.ceil(Math.random() * 100)
  }
};

createGame(fs.readFileSync('./templates/index_template.html', 'utf8'), game);
