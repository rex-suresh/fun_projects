class Game {
  #moves; #player; #target;
  constructor(player, target) {
    this.#player = player;
    this.#target = target;
    this.#moves = [];
  }

  moveRight() {
    this.#player.right();
  }

  moveLeft() {
    this.#player.left();
  }
}

exports.Game = Game;
