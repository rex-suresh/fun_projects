class Game {
  #player; #target;
  
  constructor( player, target ) {
    this.#player = player;
    this.#target = target;
  }

  movePlayerRight() {
    this.#player.moveRight();
  }

  movePlayerLeft() {
    this.#player.moveLeft();
  }

  changeTargetPos() {
    this.#target.changePosition();
  }

  #isPointGain(position) {
    return this.#player.isPlayerAt(position);
  }

  checkPoints() {
    const targetPos = this.#target.currentPosition();
    if (this.#isPointGain(targetPos)) {
      this.#player.addPoint();
    }
  }

  showPositions() {
    return {
      player: this.#player.currentPosition(),
      target: this.#target.currentPosition()
    };
  }

  isGameOver() {
    return this.#player.isPlayerWon();
  }
}

exports.Game = Game;
