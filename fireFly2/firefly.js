const { EventEmitter } = require('events');
const {Player} = require('./player.js');
const {Target} = require('./target.js');
const {Game} = require('./game.js');

// const randomInt = (limit) => Math.ceil(Math.random() * limit);

const getEvents = (emmiter, game) => {
  emmiter.on('left', () => game.movePlayerLeft());
  emmiter.on('left', () => game.checkPoints());
  emmiter.on('left', () => console.log(game.showPositions()));
  emmiter.on('right', () => game.movePlayerRight());
  emmiter.on('right', () => game.checkPoints());
  emmiter.on('right', () => console.log(game.showPositions()));

  return emmiter;
};

const main = (game) => {
  const events = getEvents(new EventEmitter(), game);
  const moves = ['right', 'right'];

  moves.forEach(move => {
    events.emit(move);
  });
};

const fly = new Player(1, 2);
const target = new Target(3);
const game = new Game(fly, target);

console.log(game.showPositions());
main(game);
